import { Controller, Get,Post,UseGuards,Request } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from 'src/auth/auth.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
@Controller('logout')
export class AppController {
  constructor(private authService: AuthService){}
  //@UseGuards(LocalAuthGuard)
  @Post()
  login(): any {
    return this.authService.validateUser("jk@gmail.com","sa1d5ad")
} 
}
