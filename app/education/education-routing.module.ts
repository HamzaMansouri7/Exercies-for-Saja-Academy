import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimaryComponent } from './primary/primary.component';
import { SecondryComponent } from './secondry/secondry.component';

const routes: Routes = [
  {path: 'primary', component: PrimaryComponent},
  {path: 'secondry', component: SecondryComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EducationRoutingModule { }
