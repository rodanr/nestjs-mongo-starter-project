import { Body, Controller, Delete, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post('signup')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }
  @Post('login')
  loginUser() {
    return this.usersService.loginUser();
  }
  @Post('update')
  updateUser() {
    return this.usersService.updateUser();
  }
  @Delete('delete')
  deleteUser() {
    return this.usersService.deleteUser;
  }
}
