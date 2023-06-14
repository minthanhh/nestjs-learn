import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
console.log(process.env.MONGODB_URL);
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      'mongodb://127.0.0.1:27017/nest?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.7.1',
    ),
    AuthModule,
    UsersModule,
  ],
})
export class AppModule {}
