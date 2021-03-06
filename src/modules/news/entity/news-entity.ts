import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('news')

export class NewsEntity {

    @PrimaryGeneratedColumn()
    id: number
    @Column()
    titulo: string
    @Column()
    descripcion: string
    @Column()
    imagen: string
    @Column()
    publicada: number
    @Column()
    orden: number

}