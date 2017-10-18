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
var chat_service_1 = require("../../service/chat.service");
var storage_service_1 = require("../../service/storage.service");
var RoomsComponent = (function () {
    function RoomsComponent(chatService, storageService) {
        var _this = this;
        this.chatService = chatService;
        this.storageService = storageService;
        this.IsUserSet = false;
        this.friendsCount = 0;
        this.familyCount = 0;
        this.chatService.FriendCountChanged.subscribe(function (value) {
            _this.friendsCount = value;
        });
        this.chatService.FamilyCountChanged.subscribe(function (value) {
            _this.familyCount = value;
        });
        this.storageService.SetUserName.subscribe(function (value) {
            _this.IsUserSet = true;
        });
    }
    return RoomsComponent;
}());
RoomsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'rooms',
        templateUrl: './rooms.component.html',
        styleUrls: ['./rooms.component.css'],
    }),
    __metadata("design:paramtypes", [chat_service_1.ChatService, storage_service_1.StorageService])
], RoomsComponent);
exports.RoomsComponent = RoomsComponent;
//# sourceMappingURL=rooms.component.js.map