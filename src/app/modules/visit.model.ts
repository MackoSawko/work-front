import { User } from './user.model';

export class Visit {
    id: number;
    doctor: User;
    user: User;
    date: Date;
  }
