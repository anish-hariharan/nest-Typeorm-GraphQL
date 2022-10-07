/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Args, Int, Mutation, Query } from "@nestjs/graphql"
import { Resolver } from "@nestjs/graphql";
import { CreateInput } from "./dto/create-pet.input";
import { Pet } from "./pet.entity";
import { PetService } from "./pet.service";

@Resolver(of => Pet)
export class PetResolver{
    constructor(private petservice: PetService) {}

    @Query(returns => [Pet])
        pet(): Promise<Pet[]>{
            return this.petservice.findAll();
        }

    @Query(returns => Pet)
        GetPet(@Args('id') id: number): Promise<Pet>{
            return this.petservice.GetPet(id)
        }

    @Mutation(returns => String)
        async create(@Args('data') data: CreateInput): Promise<string>{
            this.petservice.create(data)
            return "ok"
        }

    @Mutation(returns => String)
        async Delete(@Args('id') id: number){
            this.petservice.Delete(id)
            return "Deleted"
        }
}