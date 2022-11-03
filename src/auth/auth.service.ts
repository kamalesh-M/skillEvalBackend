import { Injectable,UnauthorizedException } from '@nestjs/common';


import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import {Response, Request} from 'express';
import { PatientService } from 'src/patient/patient.service';

@Injectable()
export class AuthService {
    constructor(private usersService: UserService,
        private jwtService:JwtService, 
        private patientDetails: PatientService){}

    async validateUser(email: string, password: string): Promise<any> {
        
        const user = await this.usersService.findOne(email);
        if (user ) {
            if(user.password === password){
                console.log("Sucess")
                const {password, ...result} = user
                return user
            }
            
        }
        
        throw new UnauthorizedException();
    }
    async login(user:any){
        const payload = {
            email:user.email,
            sub: user._id
        };
        //could also send the patientlist of the doctor along with the login response
        //const patientList = await this.patientDetails.findPaitentByDoctorId(user._id)
        return {
            access_token:this.jwtService.sign(payload),
            doctorId:user._id,
            //patientList: patientList,
            message:"Authenticated"
        }
    }
}