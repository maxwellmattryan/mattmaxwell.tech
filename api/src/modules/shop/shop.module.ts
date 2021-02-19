import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { ShopCategoryController } from './controllers/shop-category.controller';
import { ShopCustomerControllerController } from './controllers/shop-customer-controller.controller';
import { ShopOrderController } from './controllers/shop-order.controller';
import { ShopProductController } from './controllers/shop-product.controller';
import { ShopProductStatusController } from './controllers/shop-product-status.controller';

import { ShopCategory } from './entities/shop-category.entity';
import { ShopCustomer } from './entities/shop-customer.entity';
import { ShopOrder } from './entities/shop-order.entity';
import { ShopProduct } from './entities/shop-product.entity';
import { ShopProductStatus } from './entities/shop-product-status.entity';

import { ShopCategoryService } from './services/shop-category.service';
import { ShopCustomerService } from './services/shop-customer-service.service';
import { ShopOrderService } from './services/shop-order.service';
import { ShopPaymentService } from './services/shop-payment.service';
import { ShopProductService } from './services/shop-product.service';
import { ShopProductStatusService } from './services/shop-product-status.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([ShopCategory, ShopCustomer, ShopOrder, ShopProduct, ShopProductStatus])
    ],
    exports: [],
    controllers: [
        ShopCategoryController,
        ShopCustomerControllerController,
        ShopOrderController,
        ShopProductController,
        ShopProductStatusController
    ],
    providers: [
        ShopCategoryService,
        ShopCustomerService,
        ShopOrderService,
        ShopPaymentService,
        ShopProductService,
        ShopProductStatusService
    ]
})
export class ShopModule { }
