import { Injectable } from '@nestjs/common';
import { Controller,UseGuards,Post,Request} from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
//import { LocalAuthGuard } from 'src/auth/local-auth.guard';

import { AuthGuard } from '@nestjs/passport';
@Injectable()
export class AppService {
  constructor(private authService: AuthService){}
    //@UseGuards(AuthGuard('local'))
    //@Post()
    login(): any {
      return this.authService.validateUser("kamalesh14998@gmail.com","12345")
  } 
}
