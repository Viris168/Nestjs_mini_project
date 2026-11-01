
// src/products/products.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsService } from './products.service.js';
import { ProductsController } from './products.controller.js';
import { Product } from './entities/product.entity.js';
import { ProductsRepository } from './products.repository.js';

@Module({
  imports: [TypeOrmModule.forFeature([Product])], // Registers Product repository
  controllers: [ProductsController],
  providers: [ProductsService, ProductsRepository],
  exports: [ProductsRepository], // Export if other modules need access
})
export class ProductsModule {}