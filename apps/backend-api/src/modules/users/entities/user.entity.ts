import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ unique: true })
  id: string;
  @Prop({ unique: true, minlength: 3 })
  username: string;
  @Prop()
  firstName: string;
  @Prop()
  middleName: string;
  @Prop()
  lastName: string;
  @Prop({ unique: true })
  email: string;
  @Prop({ minlength: 8, select: false })
  password: string;
  @Prop({ type: Date })
  created_at: Date;
}
export const UserSchema = SchemaFactory.createForClass(User);
