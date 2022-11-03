import { Module } from '@nestjs/common';
import { PatientService } from './patient.service';
import { PatientController } from './patient.controller';
import { MongooseModule } from '@nestjs/mongoose/dist';
import { Patient, PatientSchema } from './patient.model';
@Module({
  imports:[MongooseModule.forFeature([{ name: "Patient", schema: PatientSchema }])],
  controllers: [PatientController],
  providers: [PatientService],
  exports:[PatientService]
})
export class PatientModule {}
