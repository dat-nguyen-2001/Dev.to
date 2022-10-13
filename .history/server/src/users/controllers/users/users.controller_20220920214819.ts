import {
    Body,
    Controller,
    Post,
    Get,
    UsePipes,
    ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/users.dtos';
import { UsersService } from 'src/users/services/users/users.service';
import { User } from 'src/typeorm';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) { }

    @Get()
    async getUsers() : Promise<User[]> {
        return await this.userService.getUsers()
    }

    // @Get('id/:id')
    // findUsersById(@Param('id', ParseIntPipe) id: number) {
    //     return this.userService.findUsersById(id);
    // }

    @Post('create')
    @UsePipes(ValidationPipe)
    async createPost(@Body() createUserDto: CreateUserDto): Promise<User> {
        return await this.userService.createUser(createUserDto);
    }
}