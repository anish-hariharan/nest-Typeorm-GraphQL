import { Module } from '@nestjs/common';
import { PetService } from './pet.service';
import { PetResolver } from './pet.resolver'
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pet } from './pet.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pet])],
  providers: [PetService, PetResolver],
})
export class PetModule {}
