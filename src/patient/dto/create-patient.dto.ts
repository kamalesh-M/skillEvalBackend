import { IsString, IsEmail, IsNumber } from "class-validator";
export class CreatePatientDto {
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
