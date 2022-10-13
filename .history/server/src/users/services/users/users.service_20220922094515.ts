import { Injectable } from '@nestjs/common';
import { User } from 'src/typeorm/user.entity';
import * as bcrypt from 'bcrypt';
import { AuthCredentialsDto } from 'src/dtos/auth-credentials.dto';
@Injectable()
export class UsersService {
  async getUsers() : Promise<User[]> {
    return await User.find();
  }

  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const {email, password} = authCredentialsDto;
    const newUser = new User();
    newUser.username = email.split('@')[0];
    newUser.email = email;
    newUser.password = await bcrypt.hash(password, 10);
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
}


