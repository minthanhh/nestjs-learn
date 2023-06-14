import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDTO } from './dtos/create-user.dto';
import { User, UserDocument } from './schema/user.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
    async create(createUserDTO: CreateUserDTO): Promise<User> {
        const createdUser = new this.userModel(createUserDTO);
        const salt = await bcrypt.genSalt();
        const hashPassword = bcrypt.hash(createdUser.password, salt);
        createdUser.password = (await hashPassword).toString();
        return createdUser.save();
      }
    
      async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
      }

      async findOne(email: string) {
        return await this.userModel.findOne({ email: email }).exec();
      }
}
