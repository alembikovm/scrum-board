import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import Entity from './entity.entity';
import { EntityService } from './entity.service';

@Controller('entity')
export class EntityController {
    constructor(private entityService: EntityService) { }

    @Put()
    async update(@Body() updatedEntity) {
        return this.entityService.update(updatedEntity)
    }

    @Get()
    async findAll(): Promise<Entity[]> {
        return this.entityService.findAll()
    }

}
