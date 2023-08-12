import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EducationRoutingModule } from './education-routing.module';
import { PrimaryComponent } from './primary/primary.component';
import { SecondryComponent } from './secondry/secondry.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PrimaryComponent,
    SecondryComponent
  ],
  imports: [
    CommonModule,
    EducationRoutingModule,
    FormsModule
  ],
  exports:[PrimaryComponent,SecondryComponent]
})
export class EducationModule { }
