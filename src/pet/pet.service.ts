/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateInput } from './dto/create-pet.input';
import { Pet } from './pet.entity';

@Injectable()
export class PetService {

    constructor (@InjectRepository(Pet) private petRepository: Repository<Pet>) {}

    async findAll(): Promise<Pet[]>{
       return this.petRepository.find();
    }

    async create(data: CreateInput){
        this.petRepository.save(data)
        return "ok"
    }

    GetPet(id: number): Promise<Pet>{
        return this.petRepository.findOne({where: {id}})    
    }

    Delete(id: number){
        this.petRepository.delete(id)
        return "Deleted";
    }
}
