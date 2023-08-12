import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkilsComponent } from './skils/skils.component';
import { ProSkilsComponent } from './pro-skils/pro-skils.component';
import { SoftSkilsComponent } from './soft-skils/soft-skils.component';

const routes: Routes = [
  {path: 'proSkils', component: SkilsComponent},
  {path: '', component: ProSkilsComponent},
  {path: 'softSkils', component: SoftSkilsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkilsRoutingModule { }
