/* eslint-disable prettier/prettier */
import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateInput {
    @Field()
    name: string;

    @Field()
    type?: string;
}