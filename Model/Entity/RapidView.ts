import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
 
@Entity('rapid_view')
export default class RapidView {

  @PrimaryGeneratedColumn()
  id: number = 0;

  @Column({unique:true})
  rapid_view_id: string = '';

  @Column({type: 'mediumtext'})
  info: string = '';
  
}
