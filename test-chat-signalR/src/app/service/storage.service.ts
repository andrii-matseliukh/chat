import { Injectable } from '@angular/core'
import { UserProfileModel } from '../models/user-profile.model'
import { Subject } from 'rxjs/Subject';

@Injectable()
export class StorageService {

    userModel: UserProfileModel = null;

    SetUserName: Subject<boolean> = new Subject<boolean>();

    add(model: UserProfileModel): void  {

        if (model == null || model.userName == null || model.userName.length === 0)
            return;

        this.userModel = model;
        this.SetUserName.next(true);
    }

    get(): UserProfileModel {
        return this.userModel;
    }
}