import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';
import { RolesGuard } from './guards/roles.guard';
import { JwtStrategy, LocalStrategy } from './strategies';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '10m' },
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, RolesGuard, LocalStrategy],
})
export class AuthModule {}
