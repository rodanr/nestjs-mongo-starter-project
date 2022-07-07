import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly UserModel: Model<User>,
  ) {}
  async createUser(createUserDto: CreateUserDto) {
    const user = new this.UserModel({
      ...createUserDto,
      created_at: new Date(),
    });
    try {
      await user.save();
    } catch (error) {
      const keyValue = <User>error.keyValue;
      if (keyValue.username) {
        throw new BadRequestException('Username already used');
      }
      if (keyValue.email) {
        throw new BadRequestException('Email is already used');
      }
    }
    return {
      message: 'SignUp Successful',
    };
  }
  async loginUser(loginUserDto: LoginUserDto) {
    const user = await this.UserModel.findOne({
      username: loginUserDto.username,
      password: loginUserDto.password,
    }).exec();
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return {
      message: 'Logged in successfully',
    };
  }
  updateUser() {
    return;
  }
  deleteUser() {
    return;
  }
}
