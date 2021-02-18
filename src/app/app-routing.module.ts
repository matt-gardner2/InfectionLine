import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfectionLineFormComponent } from './infection-line-form/infection-line-form.component';


const routes: Routes = [
  {path: '', component: InfectionLineFormComponent},
  {path: 'infectionline', component: InfectionLineFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
