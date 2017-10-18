"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Subject_1 = require("rxjs/Subject");
var ChatService = (function () {
    function ChatService() {
        this.users = [];
        this.FamilyCountChanged = new Subject_1.Subject();
        this.FriendCountChanged = new Subject_1.Subject();
        this.ActiveUsersChanged = new Subject_1.Subject();
    }
    ChatService.prototype.HandleFriendsCount = function (count) {
        this.FriendCountChanged.next(count);
    };
    ChatService.prototype.HandleFamilyCount = function (count) {
        this.FamilyCountChanged.next(count);
    };
    ChatService.prototype.HandleUsersChanged = function (userList) {
        this.ActiveUsersChanged.next(userList);
    };
    return ChatService;
}());
ChatService = __decorate([
    core_1.Injectable()
], ChatService);
exports.ChatService = ChatService;
//# sourceMappingURL=chat.service.js.map