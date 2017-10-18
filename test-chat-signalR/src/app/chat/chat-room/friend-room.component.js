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
require("/signalr/hubs");
var loader_service_1 = require("../../service/loader.service");
var storage_service_1 = require("../../service/storage.service");
var chat_service_1 = require("../../service/chat.service");
var chat;
var FriendRoomComponent = (function () {
    function FriendRoomComponent(serviceLoader, serviceStorage, serviceChat) {
        this.serviceLoader = serviceLoader;
        this.serviceStorage = serviceStorage;
        this.serviceChat = serviceChat;
        this.message = null;
        this.serverIsDone = false;
    }
    FriendRoomComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serviceLoader.setRootViewContainerRef(this.viewContainerRef);
        chat = $.connection.chatHub;
        chat.client.sendMessage = function (name, message) {
            _this.serviceLoader.addDynamicComponent(message, name);
        };
        chat.client.handleUserCount = function (count) {
            console.log("add user" + count);
            _this.serviceChat.HandleUsersCountInFriendsRoom(count);
        };
        $.connection.hub.start().done(function () {
            _this.serverIsDone = true;
            chat.server.joinRoom("lobby");
            //$('#sendmessage').click(() => {
            //    console.log(this.serviceStorage.get());
            //    //chat.server.send($('#displayname').val(), $('#message').val());
            //    $('#message').val('').focus();
            //});
        });
    };
    FriendRoomComponent.prototype.send = function () {
        var _this = this;
        if (this.serverIsDone) {
            $.connection.hub.start().done(function () {
                chat.server.send(_this.serviceStorage.get().userName, _this.message);
            });
        }
    };
    FriendRoomComponent.prototype.ngOnDestroy = function () {
    };
    return FriendRoomComponent;
}());
__decorate([
    core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef)
], FriendRoomComponent.prototype, "viewContainerRef", void 0);
FriendRoomComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'friend-room',
        templateUrl: './friend-room.component.html',
        styleUrls: ['./friend-room.component.css']
    }),
    __metadata("design:paramtypes", [loader_service_1.LoaderService,
        storage_service_1.StorageService,
        chat_service_1.ChatService])
], FriendRoomComponent);
exports.FriendRoomComponent = FriendRoomComponent;
//# sourceMappingURL=friend-room.component.js.map