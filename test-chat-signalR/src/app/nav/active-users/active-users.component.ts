import { Component } from '@angular/core';
import { ChatService } from '../../service/chat.service'

@Component({
    moduleId: module.id,
    selector: 'active-users',
    templateUrl: './active-users.component.html',
    styleUrls: ['active-users.component.css'],
})
export class ActiveUsersComponent {

    users: any = [];

    constructor(private chatService: ChatService) {

        this.chatService.ActiveUsersChanged.subscribe((value) => {

            this.users = value;
        });
    }

}
