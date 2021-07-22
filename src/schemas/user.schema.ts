// src/user/user.schema.ts
import { Field, ObjectType } from '@nestjs/graphql';
import { Document, Schema } from 'mongoose';

export const UserSchema = new Schema({
  name: String,
  email: String,
  age: Number,
});

@ObjectType()
export class User extends Document {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  age: number;
}
