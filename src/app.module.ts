import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose/dist'; 
import { PatientModule } from './patient/patient.module';
import { AuthModule } from './auth/auth.module';
import { LoginModule } from './login/login.module';
@Module({
  imports: [ConfigModule.forRoot({
    isGlobal:true
  }),
  MongooseModule.forRoot('mongodb+srv://kamalesh:J2RQBXaabDtiu4Ch@cluster0.akqzmyw.mongodb.net/?retryWrites=true&w=majority'),UserModule, PatientModule, AuthModule, LoginModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
