import { Injectable } from '@angular/core'
import { UserProfileModel } from '../models/user-profile.model'
import { Subject} from 'rxjs/Subject';

@Injectable()
export class ChatService {

    users: any = [];

    FamilyCountChanged: Subject<number> = new Subject<number>();
    FriendCountChanged: Subject<number> = new Subject<number>();
    ActiveUsersChanged: Subject<any> = new Subject<any>();

    HandleFriendsCount(count: number) {
        this.FriendCountChanged.next(count);
    }

    HandleFamilyCount(count: number) {
        this.FamilyCountChanged.next(count);
    }

    HandleUsersChanged(userList: any) {
        this.ActiveUsersChanged.next(userList);
    }

}