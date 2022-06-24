import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from '@hapi/joi';
import config from '../ormconfig';
import { EntityModule } from './entity/entity.module';
import { SeedingService } from './seeding.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    EntityModule,
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
        PORT: Joi.number(),
      }),
    }),
  ],
  controllers: [],
  providers: [
    SeedingService
  ],
})
export class AppModule {
  constructor(
    private readonly seedingService: SeedingService,
  ) { }

  async onApplicationBootstrap(): Promise<void> {
    await this.seedingService.seed();
  }
}
