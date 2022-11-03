import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { PassportModule } from '@nestjs/passport/dist';
import { AuthModule } from 'src/auth/auth.module';
@Module({
  imports:[AuthModule],
  providers: [LoginService],
  controllers: [LoginController],
  exports:[LoginService]
})
export class LoginModule {}
