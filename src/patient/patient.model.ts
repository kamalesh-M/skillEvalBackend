import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from 'src/user/user.model';
export type PatientDocument = Patient & Document;
@Schema()
export class Patient{
    @Prop({ required: true })
    Firstname: string ;

    @Prop({ required: true })
    Lastname: string ;

    @Prop()
    Middlename: string ;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User',required: true })
    Doctor: User;
    
    @Prop()
    Address: string;

    @Prop()
    country: string ;

    @Prop()
    state: string ;

    @Prop()
    zipcode: string ;

    @Prop({ required: true, unique : true})
    email: string ;

    @Prop({ required: true, unique : true  })
    phoneNumber: string ;

    @Prop()
    weight: number ;

    @Prop()
    height: number ;

}
export const PatientSchema = SchemaFactory.createForClass(Patient);