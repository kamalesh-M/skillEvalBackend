import { Injectable } from '@nestjs/common';
import { HttpException } from '@nestjs/common/exceptions';
import { InjectModel } from '@nestjs/mongoose'; 
//import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User,UserDocument } from './user.model';
import { Model } from 'mongoose';
import { use } from 'passport';
interface Users{
  username: string,
  email: string,
  password: string
}
@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(user: Users){
    const newUser = new this.userModel(user)
    try{
      await newUser.save()
      return {
        "message":"Sucess",
        "status":"200"
      }
    }
    catch(error){
      if(error.message.includes('username')){
        throw new HttpException("username has been taken",404)
      }
      if(error.message.includes('email')){
        throw new HttpException("email has been taken",404)
      }
    }
    
  }

 async findAll(){
    return this.userModel.find()
  }

  async findOne(emailid: string) {
    const res =await this.userModel.find({ email: { $eq :emailid }});
    return res[0]
}

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: string) {
    return this.userModel.findByIdAndRemove(id)
  }
}
