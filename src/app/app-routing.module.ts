import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { PersonalDataComponent } from './components/personal-data/personal-data.component';
import { VisitsComponent } from './components/visits/visits.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'visit', component: VisitsComponent },
  { path: 'personalData', component: PersonalDataComponent },
  { path: '', redirectTo: '/visit', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
