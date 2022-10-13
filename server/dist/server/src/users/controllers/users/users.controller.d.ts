import { CreateUserDto } from 'src/users/users.dtos';
import { UsersService } from 'src/users/services/users/users.service';
import { User } from 'src/typeorm';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    getUsers(): Promise<User[]>;
    createPost(createUserDto: CreateUserDto): Promise<User>;
}
