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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("../../../typeorm/user.entity");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let UsersService = class UsersService {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    async hashPassword(password, salt) {
        return bcrypt.hash(password, salt);
    }
    async getUserInfo(username) {
        return await user_entity_1.User.find({
            select: { 'username': true, "articles": true, "profile_pic": true },
            where: { username },
            relations: {
                reading_list: {
                    user: true
                },
            }
        });
    }
    async signUp(authCredentialsDto) {
        const { email, password } = authCredentialsDto;
        const existedUser = await user_entity_1.User.find({ where: { email } });
        if (existedUser.length > 0) {
            alert("User already existed!");
            return false;
        }
        const newUser = new user_entity_1.User();
        newUser.username = email.split('@')[0];
        newUser.email = email;
        newUser.salt = await bcrypt.genSalt();
        newUser.password = await this.hashPassword(password, newUser.salt);
        newUser.reading_list = [];
        newUser.articles = [];
        newUser.comments = [];
        newUser.profile_pic = '';
        try {
            await newUser.save();
            return true;
        }
        catch (err) {
            alert(err);
            return false;
        }
    }
    async signIn(authCredentailDto) {
        const { email, password } = authCredentailDto;
        const res = await user_entity_1.User.find({ where: { email } });
        if (!res.length) {
            throw new common_1.NotFoundException('User not found!');
        }
        const user = res[0];
        const hashedEnteredPassword = await this.hashPassword(password, user.salt);
        if (hashedEnteredPassword !== user.password) {
            throw new common_1.NotFoundException('Wrong password');
        }
        const payload = { email };
        const accessToken = await this.jwtService.sign(payload, { expiresIn: '3600s', secret: process.env.ACCESS_TOKEN_SECRET });
        return { accessToken };
    }
    async changeProfilePicture(username, url) {
        const user = await user_entity_1.User.findOne({
            where: { username }
        });
        user.profile_pic = url;
        await user.save();
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map