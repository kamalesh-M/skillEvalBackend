import { Controller, Get, Post, Body, Patch, Param, Delete, Headers } from '@nestjs/common';

import { PatientService } from './patient.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { GetPatientDto } from './dto/get-patient.dto';
import { Patient } from './patient.model';
import { ApiTags,ApiResponse,ApiOperation, ApiBody, ApiParam } from '@nestjs/swagger';

@ApiTags('PATIENT module')
@Controller('patient')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Post()
  @ApiOperation({summary : 'create new user (Patient)'})
  @ApiBody({
    schema:{
      type:'object',
      properties:{
        Firstname: {
                  type:'string',
                  example: 'kamalesh',
                  description: 'the firstname of the patient'
        },
        Lastname: {
          type:'string',
          example: 'kamalesh',
          description: 'the firstname of the patient'
        },
        Middlename: {
          type:'string',
          example: 'kamalesh',
          description: 'the firstname of the patient'
        },
        email: {
          type:'email',
          example: 'kamalesh@email.com',
          description: 'the email of the patient & unique'
        },
        phoneNumber: {
          type:'string',
          example: '+1985217',
          description: 'the phoneNumber of the doctor'
        },
        Doctor: {
          type:'string',
          example: 'a6s8c84dd8a4daa',
          description: 'the id of the doctor that created this patient'
        },
        Address: {
          type:'string',
          example: '4th blvd road',
          description: 'the Address of the doctor'
        },
        country: {
          type:'string',
          example: 'United states of America',
          description: 'the country of the doctor'
        },
        state: {
          type:'string',
          example: 'Arizona',
          description: 'the state of the doctor'
        },
        zipcode: {
          type:'string',
          example: '600025',
          description: 'the zipcode of the doctor'
        },
        weight: {
          type:'integer',
          example: 75,
          description: 'the phoneNumber of the doctor'
        },
        height: {
          type:'integer',
          example: 175,
          description: 'the phoneNumber of the doctor'
        },

      }
    }
  })
  @ApiResponse({
    status:201,
    description:'Patient saved'
  })
  @ApiResponse({
    status:403,
    description:'forbidden'
  })
  @ApiResponse({
    status:404,
    description:'doctor not found'
  })
  create(@Body() createPatientDto: CreatePatientDto) {
    return this.patientService.create(createPatientDto);
  }

  
  @Get()
  findAll() {
    return this.patientService.findAll();
  }

  @Get(':doctorId')
  @ApiOperation({summary : 'find a particular doctors patient'})
  @ApiParam({
    name:'doctorid',
    type:'string',
    description:'enter the unique doctor id',
    required: true
  })
  @ApiResponse({
    status:200,
    description:'patient found'
  })
  findOne(@Param('doctorId') doctorid: string) {
    return this.patientService.findPaitentByDoctorId(doctorid);
  }
 
  @Patch(':id')
  @ApiOperation({summary : 'find a particular patient by their id and update their record'})
  @ApiParam({
    name:'id',
    type:'string',
    description:'enter the unique patient id',
    required: true
  })
  @ApiBody({
    schema:{
      type:'object',
      properties:{
        Firstname: {
                  type:'string',
                  example: 'kamalesh',
                  description: 'the firstname of the patient'
        },
        Lastname: {
          type:'string',
          example: 'kamalesh',
          description: 'the firstname of the patient'
        },
        Middlename: {
          type:'string',
          example: 'kamalesh',
          description: 'the firstname of the patient'
        },
        email: {
          type:'email',
          example: 'kamalesh@email.com',
          description: 'the email of the patient & unique'
        },
        phoneNumber: {
          type:'string',
          example: '+1985217',
          description: 'the phoneNumber of the doctor'
        },
        Doctor: {
          type:'string',
          example: 'a6s8c84dd8a4daa',
          description: 'the id of the doctor that created this patient'
        },
        Address: {
          type:'string',
          example: '4th blvd road',
          description: 'the Address of the doctor'
        },
        country: {
          type:'string',
          example: 'United states of America',
          description: 'the country of the doctor'
        },
        state: {
          type:'string',
          example: 'Arizona',
          description: 'the state of the doctor'
        },
        zipcode: {
          type:'string',
          example: '600025',
          description: 'the zipcode of the doctor'
        },
        weight: {
          type:'integer',
          example: 75,
          description: 'the phoneNumber of the doctor'
        },
        height: {
          type:'integer',
          example: 175,
          description: 'the phoneNumber of the doctor'
        },

      }
    }
  })
  @ApiResponse({
    status:200,
    description:'patient found and edited'
  })
  update(@Param('id') id: string, @Body() updatePatientDto: UpdatePatientDto) {
    return this.patientService.update(id, updatePatientDto);
  }

  @Delete(":patientId")
  @ApiOperation({summary : 'find a particular patient by their id and delete their record'})
  @ApiParam({
    name:'id',
    type:'string',
    description:'enter the unique patient id',
    required: true
  })
  @ApiResponse({
    status:404,
    description:'patient not found'
  })
  @ApiResponse({
    status:200,
    description:'patient deleted'
  })
  remove(@Param('patientId') patientId: string) {
    return this.patientService.remove(patientId)
  }
}
