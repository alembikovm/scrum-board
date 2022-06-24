import { Column, Entity as EntityType, PrimaryGeneratedColumn } from 'typeorm';

@EntityType('entities')
class Entity {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public type: 'story' | 'task';


    @Column()
    public title: string;

    @Column()
    public status: 'story' | 'not_started' | 'in_progress' | 'done';

    @Column()
    public description: string;

    @Column('int', {
        nullable: true
    })
    public parent_id: number;
}

export default Entity;