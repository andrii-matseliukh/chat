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
var storage_service_1 = require("../../service/storage.service");
var user_profile_model_1 = require("../../models/user-profile.model");
var LobbyRoomComponent = (function () {
    function LobbyRoomComponent(serviceStorage, router) {
        this.serviceStorage = serviceStorage;
        this.router = router;
        this.userName = null;
    }
    LobbyRoomComponent.prototype.enterChat = function () {
        var model = new user_profile_model_1.UserProfileModel();
        model.userName = this.userName;
        this.serviceStorage.add(model);
        this.router.navigate(['/friend']);
    };
    return LobbyRoomComponent;
}());
LobbyRoomComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'lobby-room',
        templateUrl: './lobby-room.component.html',
        styleUrls: ['./lobby-room.component.css']
    }),
    __metadata("design:paramtypes", [storage_service_1.StorageService, router_1.Router])
], LobbyRoomComponent);
exports.LobbyRoomComponent = LobbyRoomComponent;
//# sourceMappingURL=lobby-room.component.js.map