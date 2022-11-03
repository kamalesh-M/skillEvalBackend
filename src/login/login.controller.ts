import { Controller, Post, Request, UseGuards,Res, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller()
export class LoginController {
  constructor( private readonly authService : AuthService){}
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req,@Res({ passthrough: true }) response) {
    const userDetails= await this.authService.login(req.user);
    //response.cookie('Jwt', userDetails.access_token)
    response.cookie('Jwt', userDetails.access_token,{
      expires:new Date(Date.now() + 25000),
      httpOnly:true
    })
    return userDetails
  }
  @UseGuards(JwtAuthGuard)
  @Get('protected')
  loggedIn(@Request() req) {
    console.log("hello jwt controller")
    return {
      "message":"Authentic User",
      "user:":req.user
    }
    
  }
}