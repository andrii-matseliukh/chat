import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app/route/app-routing.module';

import { AppComponent } from './app/app.component';
import { RoomsComponent } from './app/nav/rooms/rooms.component';
import { UserProfileComponent } from './app/nav/user-profile/user-profile.component';
import { ActiveUsersComponent } from './app/nav/active-users/active-users.component';
import { MessageItemComponent } from './app/chat/message/message-item.component';

import { StorageService } from './app/service/storage.service';
import { LoaderService } from './app/service/loader.service';
import { ChatService } from './app/service/chat.service';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        UserProfileComponent,
        ActiveUsersComponent,
        RoomsComponent,
        MessageItemComponent
    ],
    providers: [
        StorageService,
        LoaderService,
        ChatService
    ],
    bootstrap: [AppComponent],
    entryComponents: [MessageItemComponent]
})
export class AppModule { }
