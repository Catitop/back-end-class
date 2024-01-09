import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableAddresses1703019902057 implements MigrationInterface {
    name = 'CreateTableAddresses1703019902057'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "addresses" ("id" character varying NOT NULL, "street" character varying NOT NULL, "neighbourhood" character varying NOT NULL, "number" numeric NOT NULL, "createdat" TIMESTAMP NOT NULL DEFAULT now(), "updatedat" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_745d8f43d3af10ab8247465e450" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "suppliers" ADD "addressId" character varying`);
        await queryRunner.query(`ALTER TABLE "suppliers" ADD CONSTRAINT "UQ_39ff171699133c953b3813bb62a" UNIQUE ("addressId")`);
        await queryRunner.query(`ALTER TABLE "suppliers" ADD CONSTRAINT "FK_39ff171699133c953b3813bb62a" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "suppliers" DROP CONSTRAINT "FK_39ff171699133c953b3813bb62a"`);
        await queryRunner.query(`ALTER TABLE "suppliers" DROP CONSTRAINT "UQ_39ff171699133c953b3813bb62a"`);
        await queryRunner.query(`ALTER TABLE "suppliers" DROP COLUMN "addressId"`);
        await queryRunner.query(`DROP TABLE "addresses"`);
    }

}
