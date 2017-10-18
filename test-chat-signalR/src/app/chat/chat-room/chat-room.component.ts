import {
    Component,
    OnInit,
    OnDestroy,
    ViewChild,
    ViewContainerRef
} from '@angular/core';
import { Router } from '@angular/router';

import "/signalr/hubs";

import { LoaderService } from '../../service/loader.service'
import { StorageService } from '../../service/storage.service'
import { ChatService } from '../../service/chat.service'

import { UserProfileModel } from '../../models/user-profile.model'

declare var $: any;
var chat: any;


@Component({
    moduleId: module.id,
    selector: 'chat-room',
    templateUrl: './chat-room.component.html',
    styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit, OnDestroy {

    @ViewChild('dynamic', { read: ViewContainerRef }) viewContainerRef: ViewContainerRef

    constructor(private serviceLoader: LoaderService,
        private serviceStorage: StorageService,
        private serviceChat: ChatService,
        private router: Router) {

        this.room = this.getCurrentRoom(this.router.url);
        this.user = this.serviceStorage.get();

    }

    room: string;
    message: string = null;
    serverIsDone: boolean = false;
    user: UserProfileModel

    getCurrentRoom(room: string) {
        if (room == "/friend") {
            return "Friend";
        }
        else
            return "Family";
    }

    ngOnInit() {

        this.serviceLoader.setRootViewContainerRef(this.viewContainerRef);

        chat = $.connection.chatHub;

        chat.client.sendMessage = (name: any, message: any) => {

            this.serviceLoader.addDynamicComponent(name, message);
        };

        chat.client.handleUsersCount = (friendsCount: number, familyCount: number) => {

            this.serviceChat.HandleFriendsCount(friendsCount);
            this.serviceChat.HandleFamilyCount(familyCount);
        }

        chat.client.handleActiveUsers = (listUsers: any) => {

            this.serviceChat.HandleUsersChanged(listUsers);
        }

        $.connection.hub.start().done(() => {

            this.serverIsDone = true;

            chat.server.joinRoom(this.room, this.user.userName);

        });

    }

    send(): void {

        if (this.serverIsDone) {
            chat.server.send(this.room, this.user.userName, this.message);

            this.message = "";
        }
    }

    ngOnDestroy() {
            chat.server.leaveRoom(this.room);
    }

}
