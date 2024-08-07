// Mengimpor dekorator dan kelas dari TypeORM
import { 
  Entity, 
  PrimaryGeneratedColumn, 
  Column, 
  OneToMany 
} from 'typeorm';

// Mengimpor kelas Post dari direktori lokal
import { Post } from '../posts/post.entity';

// Membuat dekorator Entity untuk kelas User
@Entity()

// Membuat kelas User yang akan merepresentasikan tabel users
export class User {
  
  // Membuat kolom id dengan dekorator PrimaryGeneratedColumn
  // yang akan menjadi primary key dan auto-increment
  @PrimaryGeneratedColumn()
  id: number;

  // Membuat kolom username dengan dekorator Column
  @Column()
  username: string;

  // Membuat kolom password dengan dekorator Column
  @Column()
  password: string;

  // Membuat relasi One-To-Many dengan kelas Post
  // yang berarti satu user dapat memiliki banyak post
  @OneToMany(() => Post, post => post.user)
  posts: Post[];
}