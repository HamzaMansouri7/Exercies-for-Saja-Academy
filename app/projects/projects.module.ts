import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectCardComponent } from './project-card/project-card.component';


@NgModule({
  declarations: [
    ProjectListComponent,
    ProjectCardComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ],
 exports:[
  ProjectCardComponent,
  ProjectListComponent
 ]
})
export class ProjectsModule {}
