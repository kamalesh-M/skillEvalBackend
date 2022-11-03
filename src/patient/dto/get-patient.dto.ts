import { IsString, IsEmail, IsNumber,IsOptional } from "class-validator";
export class GetPatientDto {
    @IsString()
    doctorId:string;
    

}
