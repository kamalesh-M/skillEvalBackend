import { Injectable,HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'; 
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { Patient,PatientDocument } from './patient.model';
import { HttpException } from '@nestjs/common/exceptions';
import { Model } from 'mongoose';
interface Patients{
  Firstname: string,
  Lastname: string,
  Middlename: string,
  email: string,
  weight:number,
  height:number,
  phoneNumber:string,
  Address:string,
  country:string,
  state:string,
  zipcode:string,
  Doctor:string
}
@Injectable()
export class PatientService {
  constructor(@InjectModel("Patient") private patientModel: Model<PatientDocument>) {}
  
  async create(patient: Patients){
    const newPatient = new this.patientModel(patient)
    try{
      const result= await newPatient.save()
      return {
        "patient": result,
        "message":"patient created",
        "status": "200"
      }
    }
    catch(error){
      if(error.message.includes('email')){
        throw new HttpException("email has been taken",404)
      }
      if(error.message.includes('phoneNumber')){
        throw new HttpException("phoneNumber has been taken",404)
      }
      else{
        throw new HttpException(error.message,404)
      }
    }//.catch(err => {
     // throw new HttpException({
     //   message: err.message
     // }, HttpStatus.BAD_REQUEST);
    //}//)
  }

  findAll() {
    return this.patientModel.find()
  }

  async findPaitentByDoctorId(id: string) {
    const res =await this.patientModel.find({ Doctor: { $eq :id }});
    return res
  }

  async update(id: string, updatePatientDto: UpdatePatientDto) {
    console.log("/////////////",updatePatientDto)
    try{
      const result= await this.patientModel.findByIdAndUpdate(id,updatePatientDto,{new:true})
      return {
        "patient": result,
        "message":"patient Edited",
        "status": "200"
      }
    }catch(error){
      throw new HttpException(error.message,404)
    }
  }

  async remove(patientId: string) {
    console.log("you",patientId)
    const res = await this.patientModel.findByIdAndDelete(patientId)
    return {
      "Response":res,
      "message":"Deletion Success"
    }
  }
}
