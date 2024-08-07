// Mengimpor dekorator dan kelas dari TypeORM
import { 
  Entity, 
  PrimaryGeneratedColumn, 
  Column, 
  ManyToOne 
} from 'typeorm';

// Mengimpor kelas User dari direktori lokal
import { User } from '../users/user.entity';

// Membuat dekorator Entity untuk kelas Post
@Entity()

// Membuat kelas Post yang akan merepresentasikan tabel posts
export class Post {
  
  // Membuat kolom id dengan dekorator PrimaryGeneratedColumn
  // yang akan menjadi primary key dan auto-increment
  @PrimaryGeneratedColumn()
  id: number;

  // Membuat kolom title dengan dekorator Column
  @Column()
  title: string;

  // Membuat kolom content dengan dekorator Column
  @Column()
  content: string;

  // Membuat relasi Many-To-One dengan kelas User
  // yang berarti satu post hanya dapat dimiliki oleh satu user
  // dan relasi ini juga menghubungkan dengan kolom posts pada kelas User
  @ManyToOne(() => User, user => user.posts)
  user: User;
}