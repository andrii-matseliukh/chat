import { Component } from '@angular/core';
import { StorageService } from '../../service/storage.service'
import { UserProfileModel } from '../../models/user-profile.model'

@Component({
    moduleId: module.id,
    selector: 'user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent {

    constructor(private storageService: StorageService) {
        this.storageService.SetUserName.subscribe((value) => {
            
            this.userProfile = this.storageService.get();
        })
    }

    userProfile: UserProfileModel= null;
}
