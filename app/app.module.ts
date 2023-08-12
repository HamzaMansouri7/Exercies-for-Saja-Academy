import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { EducationModule } from './education/education.module';
import { HomeModule } from './home/home.module';
import { ExperienceModule } from './experience/experience.module';
import { ProjectsModule } from './projects/projects.module';
import { ReferenceModule } from './reference/reference.module';
import { SkilsModule } from './skils/skils.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    EducationModule,
    HomeModule,
    ExperienceModule,
    ProjectsModule,
    ReferenceModule,
    SkilsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
