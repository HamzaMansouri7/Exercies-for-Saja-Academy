import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'', /* od5el lel home module w ba3d loadi el component  li path ta3a '' vide */ 
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  { 
    path:'education', /* barra education module w chouf route fi fichier routing ta3 el module haka */
    loadChildren: () => import('./education/education.module').then(m => m.EducationModule)
  },
  {
    path:'experience', /* barra experiences module w chouf route fi fichier routing ta3 el module haka */
    loadChildren: () => import('./experience/experience.module').then(m => m.ExperienceModule)
  },
  {
    path:'projects', /* barra projects module w chouf route fi fichier routing ta3 el module haka */
    loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule)
  },
  {
    path:'reference', /* barra references module w chouf route fi fichier routing ta3 el module haka */
    loadChildren: () => import('./reference/reference.module').then(m => m.ReferenceModule)
  },
  {
    path:'skils', /* barra skills module w chouf route fi fichier routing ta3 el module haka */
    loadChildren: () => import('./skils/skils.module').then(m => m.SkilsModule)
  },
  {
    path:'projects', /* barra skills module w chouf route fi fichier routing ta3 el module haka */
    loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
