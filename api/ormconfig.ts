import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import Entity from "src/entity/entity.entity";

const config: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'admin',
    password: 'admin',
    database: 'nestjs',
    entities: [Entity],
    synchronize: true
    // autoSchemaSync: true,
};

export default config;
