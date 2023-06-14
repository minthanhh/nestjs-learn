import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateUserDTO } from './dtos/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Post('user')
    create(@Body() createUserDTO: CreateUserDTO) {
        return this.usersService.create(createUserDTO);
    }

    @Get()
    getUsers() {
        return this.usersService.findAll();
    }
}
