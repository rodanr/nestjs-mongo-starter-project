import { Body, Controller, Delete, Post, Headers, Patch } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post('signup')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }
  @Post('login')
  loginUser(@Body() loginUserDto: LoginUserDto) {
    return this.usersService.loginUser(loginUserDto);
  }
  @Patch('update')
  updateUserById(
    @Headers('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.updateUserById(id, updateUserDto);
  }
  @Delete('delete')
  deleteUser(@Headers('id') id: string) {
    return this.usersService.deleteUser(id);
  }
}
