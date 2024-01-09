import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableProducts1702563380398 implements MigrationInterface {
    name = 'CreateTableProducts1702563380398'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "products" ("id" character varying NOT NULL, "title" character varying NOT NULL, "quantity" integer NOT NULL, "measureUnit" character varying NOT NULL, "purchasePrice" integer NOT NULL, "salePrice" integer NOT NULL, "createdat" TIMESTAMP NOT NULL DEFAULT now(), "updatedat" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "products"`);
    }

}
