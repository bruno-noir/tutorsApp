import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MentorsPage } from './pages/mentors/mentors.page';
import { MentorDetailsPage } from './pages/mentor-details/mentor-details.page';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'mentors',
    pathMatch: 'full'
  },
  {
    path: 'mentors',
    loadChildren: () => import('./pages/mentors/mentors.module').then( m => m.MentorsPageModule)
  },
  {
    path: 'mentor/:mentorId', // Change ':id' to ':mentorId'
    loadChildren: () => import('./pages/mentor-details/mentor-details.module').then( m => m.MentorDetailsPageModule)
  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
