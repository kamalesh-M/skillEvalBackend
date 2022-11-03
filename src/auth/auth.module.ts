import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport/dist';
import { PassportLocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { secretKey } from 'src/jwt.token';
import { PatientModule } from 'src/patient/patient.module';
@Module({
  imports:[UserModule,PassportModule,JwtModule.register({
    secret:secretKey,
    signOptions:{expiresIn:'2h'}
  }),PatientModule],
  providers: [AuthService,PassportLocalStrategy,JwtStrategy],
  exports:[AuthService]
})
export class AuthModule {}
