import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LobbyRoomComponent } from '../chat/lobby/lobby-room.component';
import { ChatRoomComponent } from '../chat/chat-room/chat-room.component';
import { MessageItemComponent } from '../chat/message/message-item.component';

import { AuthGuard } from '../service/auth.service';

const routes: Routes = [
    { path: 'lobby', component: LobbyRoomComponent },
    { path: 'friend', component: ChatRoomComponent, canActivate: [AuthGuard] },
    { path: 'family', component: ChatRoomComponent, canActivate: [AuthGuard] },
    { path: '**', redirectTo: '/lobby' }
];

@NgModule({
    declarations: [
        LobbyRoomComponent,
        ChatRoomComponent
    ],
    imports: [RouterModule.forRoot(routes), CommonModule, FormsModule],
    exports: [
        RouterModule,
        LobbyRoomComponent,
        ChatRoomComponent,
        CommonModule
    ],
    providers: [AuthGuard]

})
export class AppRoutingModule { }
