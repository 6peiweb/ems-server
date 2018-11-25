import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
 
@Entity()
export default class Staff {

  @PrimaryGeneratedColumn()
  id: number = 0;

  @Column({length: 20})
  name: string = '';

  @Column({length: 20})
  mis: string = '';
  
}
