import { Controller, Body, Post, UseGuards, Req, Get } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { RegisterDTO, LoginDTO } from './dtos';
import { Role } from './enums/roles.enum';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { RolesGuard } from './guards/roles.guard';
import { Roles } from './roles/roles.decorator';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
        private jwtService: JwtService
    ) {}

    @Post('register')
    register(@Body() registerDTO:RegisterDTO) {
        return this.authService.register(registerDTO);
    }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    login(@Req() req: any) {
        console.log(req.user)
        return this.authService.login(req.user);
    }

    @Roles(Role.User)
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Post('user/profile')
    getUserProfile(@Req() req: any) {
        return req.user;
    }

    @Roles(Role.Admin)
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Post('admin/profile')
    getAdminProfile(@Req() req: any) {
        return req.user; 
    }

    @UseGuards(JwtAuthGuard)
    @Get('verifyToken')    
    async verifyToken(@Req() req) {
        return req.user;
    }
}
