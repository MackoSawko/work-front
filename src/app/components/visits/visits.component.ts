import { Component, OnInit } from '@angular/core';
import { VisitService } from 'src/app/services/visit.service';
import { User } from 'src/app/modules/user.model';
import { Observable } from 'rxjs';
import { Visit } from 'src/app/modules/visit.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-visits',
  templateUrl: './visits.component.html',
  styleUrls: ['./visits.component.scss']
})
export class VisitsComponent implements OnInit {

  visitService: VisitService;
  visitList: Observable<Visit[]>;
  user: Observable<User[]>;
  constructor(private userService:UserService) {

  }

  ngOnInit() {
    // this.visitList = this.visitService.findAll();
    this.user = this.userService.getUser();
  }

  editField: string;


  // awaitingPersonList: Array<any> = [
  //   { id: 6, name: 'George Vega', age: 28, companyName: 'Classical', country: 'Russia', city: 'Moscow' },
  //   { id: 7, name: 'Mike Low', age: 22, companyName: 'Lou', country: 'USA', city: 'Los Angeles' },
  //   { id: 8, name: 'John Derp', age: 36, companyName: 'Derping', country: 'USA', city: 'Chicago' },
  //   { id: 9, name: 'Anastasia John', age: 21, companyName: 'Ajo', country: 'Brazil', city: 'Rio' },
  //   { id: 10, name: 'John Maklowicz', age: 36, companyName: 'Mako', country: 'Poland', city: 'Bialystok' },
  // ];

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.visitList[id][property] = editField;
  }

  remove(id: any) {
    // this.awaitingPersonList.push(this.personList[id]);
    // this.personList.splice(id, 1);
  }

  add() {
    // if (this.awaitingPersonList.length > 0) {
    //   const person = this.awaitingPersonList[0];
    //   this.personList.push(person);
    //   this.awaitingPersonList.splice(0, 1);
    // }
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }

}
