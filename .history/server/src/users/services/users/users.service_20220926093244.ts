import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from 'src/typeorm/user.entity';
import * as bcrypt from 'bcrypt';
import { AuthCredentialsDto } from 'src/dtos/auth-credentials.dto';
import { JwtService } from "@nestjs/jwt";
import { JwtPayload } from 'src/users/jwt-payload.interface';

@Injectable()
export class UsersService {
  constructor(
    private jwtService: JwtService,
  ) { }
  private async hashPassword(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt)
  }


  async getUsers(): Promise<User[]> {
    return await User.find();
  }

  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const { email, password } = authCredentialsDto;
    //check existed user
    const existedUser = await User.find({ where: { email } })
    if (existedUser.length > 0) {
      console.log("User already existed!")
      return;
    }

    const newUser = new User();
    newUser.username = email.split('@')[0];
    newUser.email = email;
    newUser.salt = await bcrypt.genSalt();
    newUser.password = await this.hashPassword(password, newUser.salt);
    newUser.reading_list = [];
    newUser.articles = [];
    newUser.comments = [];
    try {
      await newUser.save();
      console.log('User Created!')
    }
    catch (err) {
      console.log(err)
    }
  }

  async signIn(authCredentailDto: AuthCredentialsDto): Promise<{ accessToken: string }> {
    const { email, password } = authCredentailDto;

    // Compare user's input with the database's information
    const res = await User.find({ where: { email } });

    if (!res.length) {
      throw new NotFoundException('User not found!')
    }
    const user = res[0];
    const hashedEnteredPassword = await this.hashPassword(password, user.salt)

    if (hashedEnteredPassword !== user.password) {
      throw new NotFoundException('Wrong password');
    }    
    // return the token to use for authentication later on
    const payload: JwtPayload = { email };
    const accessToken = await this.jwtService.sign(payload, {expiresIn: '3600s', secret: process.env.ACCESS_TOKEN_SECRET})
    return { accessToken }
  }
}


