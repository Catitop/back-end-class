import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidv4} from 'uuid';
import { Product } from "./Product";

@Entity("categories")
class Category {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @ManyToMany(() => Product, (products) => products.categories)
    @JoinTable()
    products: Product[];

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

export { Category };