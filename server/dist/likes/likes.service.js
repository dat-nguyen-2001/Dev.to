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
exports.LikesService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("../typeorm");
let LikesService = class LikesService {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    async extractIdFromReq(req) {
        const authorizationHeader = req.headers['authorization'];
        const token = authorizationHeader.split(' ')[1];
        if (!token) {
            console.log('Cannot get token');
            return;
        }
        const data = await this.jwtService.verify(token, { secret: process.env.ACCESS_TOKEN_SECRET });
        const email = data.email;
        const user = await typeorm_1.User.findOne({ where: { email } });
        const userId = Number(user.id);
        return userId;
    }
    async likeArticle(req, articleId) {
        const userId = await this.extractIdFromReq(req);
        const article = await typeorm_1.Article.findOne({ where: { id: articleId } });
        const alreadyLiked = await typeorm_1.Like.findOne({ where: { userId, articleId } });
        if (alreadyLiked !== null) {
            await typeorm_1.Like.remove(alreadyLiked);
            article.reactions -= 1;
            await article.save();
            return;
        }
        const newLike = new typeorm_1.Like();
        newLike.articleId = Number(articleId);
        newLike.userId = userId;
        article.reactions += 1;
        await article.save();
        await newLike.save();
    }
    async getLikedArticles(req) {
        const userId = await this.extractIdFromReq(req);
        const likes = await typeorm_1.Like.find({ where: { userId } });
        const likedArticleIds = likes.map(like => like.articleId);
        return likedArticleIds;
    }
};
LikesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], LikesService);
exports.LikesService = LikesService;
//# sourceMappingURL=likes.service.js.map