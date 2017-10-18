import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { StorageService } from '../../service/storage.service'
import { UserProfileModel } from '../../models/user-profile.model'

@Component({
    moduleId: module.id,
    selector: 'lobby-room',
    templateUrl: './lobby-room.component.html',
    styleUrls: ['./lobby-room.component.css']
})
export class LobbyRoomComponent {

    constructor(private serviceStorage: StorageService, private router: Router) {

    }

    userName: string = null;

    enterChat(): void {
        let model: UserProfileModel = new UserProfileModel();
        model.userName = this.userName;

        this.serviceStorage.add(model);
        this.router.navigate(['/friend']);
    }
}
