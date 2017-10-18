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
var message_item_component_1 = require("../chat/message/message-item.component");
var LoaderService = (function () {
    function LoaderService(factoryResolver) {
        this.factoryResolver = factoryResolver;
    }
    LoaderService.prototype.setRootViewContainerRef = function (viewContainerRef) {
        this.rootViewContainer = viewContainerRef;
    };
    LoaderService.prototype.addDynamicComponent = function (name, message) {
        var factory = this.factoryResolver.resolveComponentFactory(message_item_component_1.MessageItemComponent);
        var component = factory.create(this.rootViewContainer.parentInjector);
        component.instance.message = message;
        component.instance.name = name;
        this.rootViewContainer.insert(component.hostView);
    };
    return LoaderService;
}());
LoaderService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [core_1.ComponentFactoryResolver])
], LoaderService);
exports.LoaderService = LoaderService;
//# sourceMappingURL=loader.service.js.map