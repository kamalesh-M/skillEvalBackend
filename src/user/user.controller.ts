import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.model';
import { ApiTags,ApiResponse,ApiOperation, ApiBody, ApiParam } from '@nestjs/swagger';

@ApiTags('USER module')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signUp')
  @ApiOperation({summary : 'create new user (doctor)'})
  @ApiBody({
    schema:{
      type:'object',
      properties:{
        username: {
                  type:'string',
                  example: 'kamalesh',
                  description: 'the username of the doctor'
        },
        email: {
          type:'email',
          example: 'kamalesh@email.com',
          description: 'the email of the doctor & unique'
        },
        password: {
          type:'string',
          example: 'password',
          description: 'the password of the doctor'
        },

      }
    }
  })
  @ApiResponse({
    status:201,
    description:'user saved'
  })
  @ApiResponse({
    status:403,
    description:'forbidden'
  })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }


  @Get()
  @ApiOperation({summary : 'get all the user details'})
  @ApiResponse({
    status:200,
    description:'all the user list'
  })
  @ApiResponse({
    status:500,
    description:'internal server error'
  })
  findAll() {
    return this.userService.findAll();
  }


  @Get(':email')
  @ApiOperation({summary: 'find if the user exist'})
  @ApiParam({
    name:'email',
    type:'string',
    description:'enter the unique emailid',
    required: true
  })
  @ApiResponse({
    status:200,
    description:'user found'
  })
  findByEmail(@Param('email') email: string) {
    return this.userService.findOne(email);
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id:string){
    return this.userService.remove(id)
  }
}
