import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type UserDocument = User & Document;
@Schema()
export class User{
    @Prop({ required: true ,unique : true})
    email: String ;

    @Prop({ required: true ,unique : true})
    username: String ;

    @Prop({ required: true })
    password: String ; 

}
export const UserSchema = SchemaFactory.createForClass(User);