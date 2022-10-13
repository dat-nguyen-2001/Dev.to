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
exports.ArticlesService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("../typeorm");
const typeorm_2 = require("typeorm");
let ArticlesService = class ArticlesService {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    async getArticles(req) {
        const tag = req.query.tag;
        const search = req.query.search;
        if (tag) {
            const articles = await typeorm_1.Article.find({
                where: {
                    tags: (0, typeorm_2.Like)(`%${tag}%`)
                },
                relations: {
                    user: true,
                    listed_users: true,
                }
            });
            return articles;
        }
        if (search) {
            const articles = await typeorm_1.Article.find({
                where: [
                    { tags: (0, typeorm_2.Like)(`%${search}%`) },
                    { content: (0, typeorm_2.Like)(`%${search}%`) },
                    { title: (0, typeorm_2.Like)(`%${search}%`) },
                    { user: { username: (0, typeorm_2.Like)(`%${search}%`) } },
                ],
                relations: {
                    user: true,
                    listed_users: true
                }
            });
            return articles;
        }
        const allArticles = await typeorm_1.Article.find({
            relations: {
                listed_users: true,
                user: true
            }
        });
        return allArticles;
    }
    async getArticlesByUser(username) {
        const articles = await typeorm_1.Article.find({
            where: {
                user: { username: username }
            },
            relations: {
                user: true,
                listed_users: true
            }
        });
        return articles;
    }
    async createArticle(req, createArticleDto) {
        const { title, content, tags, coverImage } = createArticleDto;
        const authorizationHeader = req.headers['authorization'];
        const token = authorizationHeader.split(' ')[1];
        if (!token) {
            console.log('Cannot get token');
            return;
        }
        const data = await this.jwtService.verify(token, { secret: process.env.ACCESS_TOKEN_SECRET });
        const email = data.email;
        const newArticle = new typeorm_1.Article();
        newArticle.created_at = new Date();
        newArticle.title = title;
        newArticle.content = content;
        newArticle.tags = tags;
        const user = await typeorm_1.User.findOne({ where: { email } });
        newArticle.user = user;
        newArticle.userId = user.id;
        newArticle.reactions = 0;
        newArticle.comments = [];
        newArticle.listed_users = [];
        newArticle.coverImage = coverImage;
        return await newArticle.save();
    }
    async likeArticle(title) {
        const article = await typeorm_1.Article.findOne({ where: { title } });
        article.reactions += 1;
        await article.save();
    }
    async saveArticle(req, id) {
        const authorizationHeader = req.headers['authorization'] === undefined ? req.body.headers.Authorization : req.headers['authorization'];
        const token = authorizationHeader.split(' ')[1];
        if (!token) {
            console.log('Can not get token');
            return;
        }
        const data = await this.jwtService.verify(token, { secret: process.env.ACCESS_TOKEN_SECRET });
        const email = data.email;
        const user = await typeorm_1.User.findOne({ where: { email }, relations: { reading_list: true } });
        const article = await typeorm_1.Article.findOne({ where: { id }, relations: { user: true, listed_users: true } });
        console.log(article);
        const articleExisted = user.reading_list.map(article => article.id).includes(article.id);
        console.log(articleExisted);
        if (articleExisted) {
            const index = user.reading_list.indexOf(article);
            user.reading_list.splice(index, 1);
            await user.save();
            console.log('Removed');
        }
        else {
            user.reading_list.push(article);
            await user.save();
            console.log('Added');
        }
    }
};
ArticlesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], ArticlesService);
exports.ArticlesService = ArticlesService;
//# sourceMappingURL=articles.service.js.map