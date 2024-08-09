import {  HttpStatus, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import {User} from '../schemas/user.schema'
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { SecurityService } from './security.service';

@Injectable()
export class UserService {

  constructor(@InjectModel(User.name) private userModel: Model<User>,
   private securityService:SecurityService ) {}

  async createUser(createUserDto: CreateUserDto):Promise<User> {
    
    try {
      
      const newUser =new this.userModel(createUserDto);
      newUser.password=await this.securityService.encryptPassword(newUser.email);
      return  newUser.save();
    }catch(error){
      throw new InternalServerErrorException('Error creating user');
    }
   
  }

  async getAllUser() {
    try{
      return this.userModel.find();
    }catch(exception){
      throw new InternalServerErrorException();
    }
   
  }

  async findOneUser(id: string):Promise<User> {
    try{
      const userFound=this.userModel.findById(id);
      if (!userFound) {
        throw new NotFoundException(`User not found`);
      }
      return userFound;
    }catch(exception){
      throw new InternalServerErrorException('Error getting user');

    }

  }

  async updateUser(id: string, updateUserDto: UpdateUserDto):Promise<User> {

    try {
      const userUpdate=await this.userModel.findByIdAndUpdate(id, updateUserDto);
      if (!userUpdate) {
        throw new NotFoundException(`User not found`);
      }
      return userUpdate;
    } catch (error) {
      throw new InternalServerErrorException('Error updating user');
    }

  }

  async removeUser(id: string) {
    try{
    const userDelete= await this.userModel.findByIdAndDelete(id);
    if (!userDelete) {
      throw new NotFoundException(`User  not found`);
    }
    return userDelete;

    }catch(error){
      throw new InternalServerErrorException('Error removing user');
    }

  }

  async findUserToLogin(email:string){
    try {
      const userLogin = await this.userModel.findOne({"email":email});
      if (!userLogin) {
        throw new NotFoundException(`User not found`);
      }
      return userLogin;
    } catch (error) {
      throw new InternalServerErrorException('Error to find user');
    }


  }
}
