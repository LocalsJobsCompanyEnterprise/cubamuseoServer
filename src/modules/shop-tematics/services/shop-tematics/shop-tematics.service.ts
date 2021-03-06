import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { ShopTematicsEntity } from '../../entity/shop-tematics-entity';


@Injectable()
export class ShopTematicsService {
    constructor(@InjectRepository(ShopTematicsEntity) private readonly element: Repository<ShopTematicsEntity>) {

    }

    async save(data: any) {
        await this.element.insert(data);
        return data;
    }

    async update(id: number, data: any) {
        await this.element.update(id, data);
    }

    async finAll() {
        return await this.element.find(

            {
                order: { orden: 1 },
                where: { publicada: 1 }
            }

        );
    }

    async findOne(id: number) {
        return await this.element.findOne(id);
    }

    async delete(id: number) {
        return await this.element.delete(id);
    }

}