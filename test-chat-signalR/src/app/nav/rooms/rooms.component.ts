import { Component } from '@angular/core';
import { ChatService } from '../../service/chat.service'
import { StorageService } from '../../service/storage.service'

@Component({
    moduleId: module.id,
    selector: 'rooms',
    templateUrl: './rooms.component.html',
    styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent {

    constructor(private chatService: ChatService, private storageService: StorageService) {

        this.chatService.FriendCountChanged.subscribe((value) => {

            this.friendsCount = value
        });

        this.chatService.FamilyCountChanged.subscribe((value) => {
            this.familyCount = value
        });

        this.storageService.SetUserName.subscribe((value) => {
            this.IsUserSet = true;
        })

    }

    IsUserSet: boolean = false;
    friendsCount: number = 0;
    familyCount: number = 0;

    
}