"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Subject_1 = require("rxjs/Subject");
var StorageService = (function () {
    function StorageService() {
        this.userModel = null;
        this.SetUserName = new Subject_1.Subject();
    }
    StorageService.prototype.add = function (model) {
        if (model == null || model.userName == null || model.userName.length === 0)
            return;
        this.userModel = model;
        this.SetUserName.next(true);
    };
    StorageService.prototype.get = function () {
        return this.userModel;
    };
    return StorageService;
}());
StorageService = __decorate([
    core_1.Injectable()
], StorageService);
exports.StorageService = StorageService;
//# sourceMappingURL=storage.service.js.map