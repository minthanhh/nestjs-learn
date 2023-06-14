import { Injectable, Req } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt/dist';
import { UsersService } from '../users/users.service';
import { LoginDTO, RegisterDTO } from './dtos';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) {}

    async validateUser(email: string, _password: string): Promise<any> {
        const user = await this.usersService.findOne(email);
        if (user) {
          const isMatch = await bcrypt.compare(_password, user.password);
          if (isMatch != false) {
            const payload = {
              sub: user._id,
              userName: user.username,
              email: user.email,
              role: user.role,
            };
            return payload;
          }
        }
        return null;
      }

    register(registerDTO:RegisterDTO) {
        return this.usersService.create(registerDTO);
    }

    async login(user: any) {
        return {
          access_token: this.jwtService.sign(user),
        };
    }
}
