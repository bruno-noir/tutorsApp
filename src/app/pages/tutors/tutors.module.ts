import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { TutorsPage } from './tutors.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: TutorsPage
      }
    ])
  ],
  declarations: [TutorsPage]
})
export class TutorsPageModule {}
