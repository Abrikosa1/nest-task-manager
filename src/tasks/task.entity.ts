import { TaskStatus } from './task.model';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  desription: string;

  @Column()
  status: TaskStatus;
}
