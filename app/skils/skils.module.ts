import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkilsRoutingModule } from './skils-routing.module';
import { SkilsComponent } from './skils/skils.component';
import { ProSkilsComponent } from './pro-skils/pro-skils.component';
import { SoftSkilsComponent } from './soft-skils/soft-skils.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SkilsComponent,
    ProSkilsComponent,
    SoftSkilsComponent
  ],
  imports: [
    CommonModule,
    SkilsRoutingModule,
    FormsModule 
  ],
  exports:[SkilsComponent,ProSkilsComponent,SoftSkilsComponent]
})
export class SkilsModule { }
