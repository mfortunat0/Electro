import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  company: string;

  @Column()
  value: number;

  @Column()
  userName: string;

  @Column()
  userId: string;

  @Column()
  link: string;

  @CreateDateColumn()
  time: Date;

  @Column()
  isAproved: boolean;
}
