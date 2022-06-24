import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, Repository } from 'typeorm';
import Entity from './entity.entity';

@Injectable()
export class EntityService {
    constructor(
        @InjectRepository(Entity)
        private entityRepository: Repository<Entity>,
    ) { }

    async update(entity: Entity) {
        const updatedEntity = await getConnection()
            .createQueryBuilder()
            .update(Entity)
            .set({ status: entity.status })
            .where("id = :id", { id: entity.id })
            .returning('*')
            .execute();

        return updatedEntity.raw[0];
    }

    async findAll(): Promise<Entity[]> {
        return this.entityRepository.find()
    }
}
