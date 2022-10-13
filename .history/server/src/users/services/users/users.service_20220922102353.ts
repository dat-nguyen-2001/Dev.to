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
    const existedUser = User.find({where: {email}})
    if(existedUser) {
      alert('Email aready existed!')
    }

    
    const newUser = new User();
    newUser.salt = await bcrypt.genSalt();

    newUser.username = email.split('@')[0];
    newUser.email = email;
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
    const res = await User.find({ where: { email } });
    if (!res.length) {
      throw new NotFoundException('User not found!')
    }
    const user = res[0];
    const hashedEnteredPassword = await this.hashPassword(password, user.salt)
    if (hashedEnteredPassword !== user.password) {
      throw new NotFoundException('Wrong password')
    }
    const payload: JwtPayload = { email };
    // return the token to use for authentication later on
    const accessToken = await this.jwtService.sign(payload)
    return { accessToken }
  }
}


