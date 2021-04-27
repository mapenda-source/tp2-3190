import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HomeComponent } from './home/home.component';
import { VaccinComponent } from './vaccin/vaccin.component';
import { PreventionComponent } from './prevention/prevention.component';
import { MaladieComponent } from './maladie/maladie.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'vaccin', component: VaccinComponent },
  { path: 'prevention', component: PreventionComponent },
  { path: 'maladie', component: MaladieComponent },
  { path: 'test', component: TestComponent },
  { path: '**',   redirectTo: 'home', pathMatch: 'full' },
];
 // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }