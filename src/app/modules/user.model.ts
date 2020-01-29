import { Visit } from './visit.model';
import { Specialization } from './specialization.model';
import { Rate } from './rate.model';

export class User {
    userId: number;
    pesel: string;
    email: string;
    password: string;
    userType: string;
    name: string;
    surname: string;
    street: string;
    city: string;
    zipCode: string;
    phone: string;
    visitDoctor: Array<Visit>;
    visitPatient: Array<Visit>;
    specializations: Array<Specialization>;
    rateDoctor: Array<Rate>;
    rateUser: Array<Rate>;
  }
