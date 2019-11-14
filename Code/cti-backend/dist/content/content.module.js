"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const content_service_1 = require("./content.service");
const content_controller_1 = require("./content.controller");
const auth_module_1 = require("../auth/auth.module");
const users_module_1 = require("../users/users.module");
let ContentModule = class ContentModule {
};
ContentModule = __decorate([
    common_1.Module({
        imports: [auth_module_1.AuthModule, users_module_1.UsersModule],
        controllers: [content_controller_1.ContentController],
        providers: [content_service_1.ContentService],
        exports: [content_service_1.ContentService]
    })
], ContentModule);
exports.ContentModule = ContentModule;
//# sourceMappingURL=content.module.js.map