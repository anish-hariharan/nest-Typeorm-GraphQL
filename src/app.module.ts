/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetModule } from './pet/pet.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pet  } from './pet/pet.entity';


@Module({
  imports: [GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
  }) ,
  TypeOrmModule.forRoot({
    type: 'mysql',
    database: 'nestg',
    entities: [Pet],
    username: 'root',
    password: '373414',
    synchronize: true,
  })
  ,
  PetModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
