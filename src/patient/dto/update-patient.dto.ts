import { PartialType } from '@nestjs/mapped-types';
import { CreatePatientDto } from './create-patient.dto';
import { IsString, IsEmail, IsNumber } from "class-validator";

export class UpdatePatientDto extends PartialType(CreatePatientDto) {
    @IsString()
    Firstname:string;
    
    @IsString()
    Lastname:string;
    
    @IsString()
    Middlename:string;
    
    @IsString()
    Doctor:string;

    @IsString()
    Address:string;

    @IsString()
    country:string;

    @IsString()
    state:string;

    @IsString()
    zipcode:string;

    @IsEmail()
    email: string;

    @IsString()
  
    phoneNumber:string;

    @IsNumber()
  
    weight: number;
    
    @IsNumber()
  
    height: number;
}
