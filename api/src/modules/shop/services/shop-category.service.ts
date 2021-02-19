import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { ShopCategory } from '@api/modules/shop/entities/shop-category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ShopCategoryService {
    constructor(
        @InjectRepository(ShopCategory)
        private readonly shopCategoryRepository: Repository<ShopCategory>
    ) { }

    public async getCategories(): Promise<ShopCategory[]> {
        return await this.shopCategoryRepository
            .createQueryBuilder('sc')
            .getMany();
    }
}