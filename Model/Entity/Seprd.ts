import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
 
@Entity()
export default class Seprd {

  @PrimaryGeneratedColumn()
  id: number = 0;

  @Column({unique:true})
  seprd_id: string = '';

  @Column({type: 'text'})
  info: string = '';
  
}
