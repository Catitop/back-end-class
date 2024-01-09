import { Column, CreateDateColumn, Entity, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid';
import { Supplier } from "./Supplier";

@Entity("addresses")
class Address {
    @PrimaryColumn()
    id: string;

    @Column()
    street: string;

    @Column()
    neighbourhood: string;

    @Column({type: "numeric"})
    number: number;

    @OneToOne(() => Supplier, (supplier) => supplier.address)
    supplier: Supplier;

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

export { Address }