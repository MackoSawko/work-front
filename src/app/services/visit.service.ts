import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Visit } from '../modules/visit.model';


@Injectable({
  providedIn: 'root'
})
export class VisitService {

  private userUrl = 'http://localhost:8080';

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {}

  public findAll(): Observable<Visit[]> {
    return this.http.get<Visit[]>(this.userUrl + '/visit');
  }


  public save(visit: Visit) {
    return this.http.post<Visit>(this.userUrl + '/visit', visit);
  }

  public delete(visitId: string) {
    // let httpParams = new HttpParams().set('id', visitId);

    // return this.http.delete<Visit>(this.userUrl + '/visit', httpParams);
  }


}
