import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from 'src/typeorm/user.entity';
import * as bcrypt from 'bcrypt';
import { AuthCredentialsDto } from 'src/dtos/auth-credentials.dto';
@Injectable()
export class UsersService {
  private async hashPassword(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt)
  }


  async getUsers(): Promise<User[]> {
    return await User.find();
  }

  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const { email, password } = authCredentialsDto;
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

  async signIn(authCredentailDto: AuthCredentialsDto): Promise<string }> {
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

    // const payload: JwtPayload = { username };
    // const accessToken = await this.jwtService.sign(payload)
    // return { accessToken }
  }
}


