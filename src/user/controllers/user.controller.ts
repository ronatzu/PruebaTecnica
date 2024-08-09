import { Controller, Get, Post, Body, Param, Delete, Put, NotFoundException } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { Public } from 'src/auth/decorators/auth.decorator';

@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  
  @Get()
  getAllUser() {
    return this.userService.getAllUser();
  }

  @Get('/:id')
  findOneUser(@Param('id') id: string) {
    return this.userService.findOneUser(id);
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {

    try{
      return this.userService.createUser(createUserDto);
    }catch(error){
      throw new NotFoundException();
    }
    
  }


  @Put('/:id')
 updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.updateUser(id, updateUserDto);
  }

  @Delete('/:id')
  removeUser(@Param('id') id: string) {
    return this.userService.removeUser(id);
  }
}
