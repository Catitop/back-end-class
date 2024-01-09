import { Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid';
import { Supplier } from "./Supplier";
import { Category } from "./Category";

@Entity('products')
class Product {

    @PrimaryColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    quantity: number;

    @Column()
    measureUnit: string;

    @Column({type: "numeric"})
    purchasePrice: number;

    @Column({type: "numeric"})
    salePrice: number;

    @ManyToOne(() => Supplier, (supplier) => supplier.products)
    supplier: Supplier;

    @ManyToMany(() => Category, (category) => category.products)
    categories: Category[];

    @CreateDateColumn()
    createdat: Date;

    @UpdateDateColumn()
    updatedat: Date;

    constructor() {
        if(!this.id) {
            this.id = uuidv4();
        }
    }
}

export { Product }