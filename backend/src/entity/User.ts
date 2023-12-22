import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("user", )
export class User {
    @PrimaryGeneratedColumn()
    _no!: number;

    @Column({ type: "varchar", nullable: false })
    userid!: string;

    @Column({ type: "varchar", nullable: false })
    userpassword!: string;

    @Column({ type: "varchar", nullable: false })
    username!: string;
}

