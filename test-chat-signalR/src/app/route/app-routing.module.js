"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var lobby_room_component_1 = require("../chat/lobby/lobby-room.component");
var chat_room_component_1 = require("../chat/chat-room/chat-room.component");
var auth_service_1 = require("../service/auth.service");
var routes = [
    { path: 'lobby', component: lobby_room_component_1.LobbyRoomComponent },
    { path: 'friend', component: chat_room_component_1.ChatRoomComponent, canActivate: [auth_service_1.AuthGuard] },
    { path: 'family', component: chat_room_component_1.ChatRoomComponent, canActivate: [auth_service_1.AuthGuard] },
    { path: '**', redirectTo: '/lobby' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        declarations: [
            lobby_room_component_1.LobbyRoomComponent,
            chat_room_component_1.ChatRoomComponent
        ],
        imports: [router_1.RouterModule.forRoot(routes), common_1.CommonModule, forms_1.FormsModule],
        exports: [
            router_1.RouterModule,
            lobby_room_component_1.LobbyRoomComponent,
            chat_room_component_1.ChatRoomComponent,
            common_1.CommonModule
        ],
        providers: [auth_service_1.AuthGuard]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map