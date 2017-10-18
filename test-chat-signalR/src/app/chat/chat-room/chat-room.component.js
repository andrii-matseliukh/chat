"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
require("/signalr/hubs");
var loader_service_1 = require("../../service/loader.service");
var storage_service_1 = require("../../service/storage.service");
var chat_service_1 = require("../../service/chat.service");
var chat;
var ChatRoomComponent = (function () {
    function ChatRoomComponent(serviceLoader, serviceStorage, serviceChat, router) {
        this.serviceLoader = serviceLoader;
        this.serviceStorage = serviceStorage;
        this.serviceChat = serviceChat;
        this.router = router;
        this.message = null;
        this.serverIsDone = false;
        this.room = this.getCurrentRoom(this.router.url);
        this.user = this.serviceStorage.get();
    }
    ChatRoomComponent.prototype.getCurrentRoom = function (room) {
        if (room == "/friend") {
            return "Friend";
        }
        else
            return "Family";
    };
    ChatRoomComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serviceLoader.setRootViewContainerRef(this.viewContainerRef);
        chat = $.connection.chatHub;
        chat.client.sendMessage = function (name, message) {
            _this.serviceLoader.addDynamicComponent(name, message);
        };
        chat.client.handleUsersCount = function (friendsCount, familyCount) {
            _this.serviceChat.HandleFriendsCount(friendsCount);
            _this.serviceChat.HandleFamilyCount(familyCount);
        };
        chat.client.handleActiveUsers = function (listUsers) {
            _this.serviceChat.HandleUsersChanged(listUsers);
        };
        $.connection.hub.start().done(function () {
            _this.serverIsDone = true;
            chat.server.joinRoom(_this.room, _this.user.userName);
        });
    };
    ChatRoomComponent.prototype.send = function () {
        if (this.serverIsDone) {
            chat.server.send(this.room, this.user.userName, this.message);
            this.message = "";
        }
    };
    ChatRoomComponent.prototype.ngOnDestroy = function () {
        chat.server.leaveRoom(this.room);
    };
    return ChatRoomComponent;
}());
__decorate([
    core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef)
], ChatRoomComponent.prototype, "viewContainerRef", void 0);
ChatRoomComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'chat-room',
        templateUrl: './chat-room.component.html',
        styleUrls: ['./chat-room.component.css']
    }),
    __metadata("design:paramtypes", [loader_service_1.LoaderService,
        storage_service_1.StorageService,
        chat_service_1.ChatService,
        router_1.Router])
], ChatRoomComponent);
exports.ChatRoomComponent = ChatRoomComponent;
//# sourceMappingURL=chat-room.component.js.map