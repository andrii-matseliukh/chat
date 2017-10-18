"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_routing_module_1 = require("./app/route/app-routing.module");
var app_component_1 = require("./app/app.component");
var rooms_component_1 = require("./app/nav/rooms/rooms.component");
var user_profile_component_1 = require("./app/nav/user-profile/user-profile.component");
var active_users_component_1 = require("./app/nav/active-users/active-users.component");
var message_item_component_1 = require("./app/chat/message/message-item.component");
var storage_service_1 = require("./app/service/storage.service");
var loader_service_1 = require("./app/service/loader.service");
var chat_service_1 = require("./app/service/chat.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            app_routing_module_1.AppRoutingModule
        ],
        declarations: [
            app_component_1.AppComponent,
            user_profile_component_1.UserProfileComponent,
            active_users_component_1.ActiveUsersComponent,
            rooms_component_1.RoomsComponent,
            message_item_component_1.MessageItemComponent
        ],
        providers: [
            storage_service_1.StorageService,
            loader_service_1.LoaderService,
            chat_service_1.ChatService
        ],
        bootstrap: [app_component_1.AppComponent],
        entryComponents: [message_item_component_1.MessageItemComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map