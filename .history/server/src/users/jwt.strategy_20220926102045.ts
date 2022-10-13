import { JwtService } from '@nestjs/jwt';
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import { JwtPayload } from "./jwt-payload.interface";
import { User } from "src/typeorm";
import { Request } from "express";
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: "datlinh1"
        }),
    }

    async validate(payload: JwtPayload): Promise<User> {
        const { email } = payload;
        const user = await User.findOne({ where: { email } })
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }

    async authenToken(req: Request): Promise<string> {
        const authorizationHeader = req.headers['authorization'];
        const token = authorizationHeader.split(' ')[1];
        if(!token) {console.log('Cannot get token'); return}
        const data = await JwtService.(token, {secret: process.env.ACCESS_TOKEN_SECRET});
        const email = data.email;
        return email
    }
}