import { Router, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

import { UserProfileModel } from '../models/user-profile.model'

import { StorageService } from './storage.service'

@Injectable()

export class AuthGuard implements CanActivate {

    constructor(private router: Router, private storageService: StorageService) {
    }

    user: UserProfileModel;

    canActivate() {

        this.user = this.storageService.get();

        if (this.user == null || this.user.userName == null || this.user.userName.length == 0) {
            this.router.navigate(['/lobby']);
            return false;
        }

        return true;
    }
}