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
var storage_service_1 = require("../../service/storage.service");
var UserProfileComponent = (function () {
    function UserProfileComponent(storageService) {
        var _this = this;
        this.storageService = storageService;
        this.userProfile = null;
        this.storageService.SetUserName.subscribe(function (value) {
            _this.userProfile = _this.storageService.get();
        });
    }
    return UserProfileComponent;
}());
UserProfileComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'user-profile',
        templateUrl: './user-profile.component.html',
        styleUrls: ['./user-profile.component.css'],
    }),
    __metadata("design:paramtypes", [storage_service_1.StorageService])
], UserProfileComponent);
exports.UserProfileComponent = UserProfileComponent;
//# sourceMappingURL=user-profile.component.js.map