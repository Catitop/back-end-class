import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid';
import { Product } from "./Product";
import { Address } from "./Address";

@Entity('suppliers')
class Supplier {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    cnpj: string;

    @OneToMany(() => Product, (product) => product.supplier)
    products: Product[];

    @OneToOne(() => Address, (address) => address.supplier)
    @JoinColumn()
    address: Address;

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

export { Supplier };