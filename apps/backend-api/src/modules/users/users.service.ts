import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly UserModel: Model<User>,
  ) {}
  async createUser(createUserDto: CreateUserDto) {
    const user = new this.UserModel({
      ...createUserDto,
      created_at: new Date(),
      id: uuidv4(),
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
  async updateUserById(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.UserModel.findOneAndUpdate(
      {
        id: id,
      },
      {
        $set: updateUserDto,
      },
      {
        new: true,
      },
    ).exec();
    if (!user) {
      throw new NotFoundException(`User ${id} not found`);
    }
    return user;
  }
  deleteUser() {
    return;
  }
}
