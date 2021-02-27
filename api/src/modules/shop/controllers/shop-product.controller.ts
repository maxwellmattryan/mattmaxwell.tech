import { Controller, Delete, Get, HttpCode, Param, Post, Put, Query, Req, UseGuards } from '@nestjs/common';

import { Request } from 'express';

import { JwtAuthGuard } from '@api/core/auth/jwt/jwt-auth.guard';

import { ShopProduct } from '../entities/shop-product.entity';
import { ShopProductService } from '../services/shop-product.service';
import { ShopProductCouldNotBeUpdatedException, ShopProductsWereNotFoundException, ShopProductWasNotFoundException } from '../exceptions/shop-product.exception';

@Controller('shop/products')
export class ShopProductController {
    constructor(
        private readonly shopProductService: ShopProductService
    ) { }

    @Get('')
    @HttpCode(200)
    public async getProducts(
        @Query('statusId') statusId,
        @Query('categoryId') categoryId,
        @Req() request: Request
    ): Promise<ShopProduct[]> {
        let products: ShopProduct[];

        if(statusId && statusId != -1) {
            if(categoryId && categoryId != -1) {
                products = await this.shopProductService.getProductsByStatusAndCategory(statusId, categoryId);
            } else {
                products = await this.shopProductService.getProductsByStatus(statusId);
            }
        } else {
            if(categoryId && categoryId != -1) {
                products = await this.shopProductService.getProductsByCategory(categoryId);
            } else {
                products = await this.shopProductService.getProducts();
            }
        }

        if(products.length === 0) throw new ShopProductsWereNotFoundException();

        return products;
    }

    @Post('')
    @HttpCode(201)
    @UseGuards(JwtAuthGuard)
    public async createProduct(@Req() request: Request): Promise<ShopProduct> {
        return await this.shopProductService.createProduct(request.body);
    }

    @Get(':id')
    @HttpCode(200)
    public async getProduct(@Param('id') id: number, @Req() request: Request): Promise<ShopProduct> {
        const product: ShopProduct = await this.shopProductService.getProduct(id);
        if(!product) throw new ShopProductWasNotFoundException();

        return product;
    }

    @Put(':id')
    @HttpCode(200)
    @UseGuards(JwtAuthGuard)
    public async updateProduct(@Param('id') id: number, @Req() request: Request): Promise<ShopProduct> {
        const product = await this.shopProductService.updateProduct(id, request.body);
        if(!product) throw new ShopProductCouldNotBeUpdatedException();

        return product;
    }

    @Delete(':id')
    @HttpCode(204)
    @UseGuards(JwtAuthGuard)
    public async deleteProduct(@Query() query, @Param('id') id: number, @Req() request: Request): Promise<void> {
        if(!(await this.shopProductService.existsInTable(id)))
            throw new ShopProductWasNotFoundException();

        if(query.softDelete)
            await this.shopProductService.softDeleteProduct(id);
        else
            await this.shopProductService.deleteProduct(id);
    }
}
