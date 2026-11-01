import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ValueTransformer } from 'typeorm';

export const Transformer: ValueTransformer = {
  to: (value: number): number => value,
  from: (value?: string | null): number | null => 
    value == null ? null : parseFloat(value),
};

@Entity('products')
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({unique: true})
    sku: string;

    @Column()
    name: string;

    @Column({type: 'text' , nullable: true})
    description: string | null;

    @Column({type: 'integer', default: 0})
    quantity: number;

    @Column({type: 'number' , transformer: Transformer, precision: 12, scale: 2})
    price: number;

    @CreateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    updateAt: Date;

    @Column({ type: 'integer', default: 5 })
    lowStockThreshold: number;
}
