"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("../../../typeorm/user.entity");
const bcrypt = require("bcrypt");
let UsersService = class UsersService {
    async getUsers() {
        return await user_entity_1.User.find();
    }
    async createUser(createUserDto) {
        const { username, email, password } = createUserDto;
        const newUser = new user_entity_1.User();
        newUser.username = username;
        newUser.email = email;
        newUser.password = await bcrypt.hash(password, 10);
        newUser.reading_list = [];
        newUser.articles = [];
        newUser.comments = [];
        return await newUser.save();
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map