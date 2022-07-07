import { Controller, Delete, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post('signup')
  createUser() {
    return this.usersService.createUser();
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
