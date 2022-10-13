import { AuthCredentialsDto } from 'src/dtos/auth-credentials.dto';
import { UsersService } from 'src/users/services/users/users.service';
import { User } from 'src/typeorm';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    getUserInfo(username: string): Promise<User[]>;
    signUp(authCredentialsDto: AuthCredentialsDto): Promise<boolean>;
    signIn(authCredentialsDto: AuthCredentialsDto): Promise<{
        accessToken: string;
    }>;
    changeProfilePicture(body: {
        username: string;
        url: string;
    }): Promise<void>;
}
