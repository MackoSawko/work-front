import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../modules/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'http://localhost:8080';

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {}

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl + '/user');
  }

  public getUser(): Observable<User[]> {
    console.log(this.http.get<User[]>(this.userUrl + '/user/1'));
    return this.http.get<User[]>(this.userUrl + '/user/1');
  }


  public save(user: User) {
    return this.http.post<User>(this.userUrl + '/user', user);
  }


}
