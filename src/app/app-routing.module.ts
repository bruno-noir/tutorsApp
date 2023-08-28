import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TutorsPage } from './pages/tutors/tutors.page';
import { TutorDetailsPage } from './pages/tutor-details/tutor-details.page';


const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'tutors',
    pathMatch: 'full'
  },
  {
    path: 'tutors',
    loadChildren: () => import('./pages/tutors/tutors.module').then( m => m.TutorsPageModule)
  },
  {
    path: 'tutor/:id',
    loadChildren: () => import('./pages/tutor-details/tutor-details.module').then( m => m.TutorDetailsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
