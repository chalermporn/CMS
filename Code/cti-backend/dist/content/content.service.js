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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
let ContentService = class ContentService {
    constructor() { }
    createContent(id, content) {
        var filePath = path_1.default.join(process.cwd(), 'data', id + '.html');
        if (fs_1.default.existsSync(filePath)) {
            return false;
        }
        fs_1.default.writeFileSync(filePath, content);
        return true;
    }
    getContent(id) {
        var page = fs_1.default.readFileSync(path_1.default.join(process.cwd(), 'data', id + '.html'));
        return { page };
    }
    removeContent(id) {
        fs_1.default.unlinkSync(path_1.default.join(process.cwd(), 'data', id + '.html'));
        return true;
    }
    saveContent(id, content) {
        fs_1.default.writeFileSync(path_1.default.join(process.cwd(), 'data', id + '.html'), content);
        return true;
    }
    getMenu() {
        var menu = fs_1.default.readFileSync(path_1.default.join(process.cwd(), 'data', 'menu.html'));
        return { menu };
    }
    saveMenu(menu) {
        fs_1.default.writeFileSync(path_1.default.join(process.cwd(), 'data', 'menu.html'), menu);
        return true;
    }
};
ContentService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], ContentService);
exports.ContentService = ContentService;
//# sourceMappingURL=content.service.js.map