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
exports.CommentsService = void 0;
const jwt_1 = require("@nestjs/jwt");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("../typeorm");
let CommentsService = class CommentsService {
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
    async createComment(req, createCommentDto) {
        const { content, articleId } = createCommentDto;
        const userId = await this.extractIdFromReq(req);
        const user = await typeorm_1.User.findOne({ where: { id: userId } });
        const article = await typeorm_1.Article.findOne({ where: { id: articleId } });
        const newComment = new typeorm_1.Comment();
        newComment.created_at = new Date();
        newComment.content = content;
        newComment.user = user;
        newComment.article = article;
        await newComment.save();
    }
    async getComments(articleId) {
        const comments = await typeorm_1.Comment.find({ where: { article: { id: articleId } }, relations: { user: true } });
        return comments;
    }
};
CommentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], CommentsService);
exports.CommentsService = CommentsService;
//# sourceMappingURL=comments.service.js.map