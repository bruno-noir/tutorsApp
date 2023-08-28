import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TutorDetailsPageRoutingModule } from './tutor-details-routing.module';

import { TutorDetailsPage } from './tutor-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TutorDetailsPageRoutingModule
  ],
  declarations: [TutorDetailsPage]
})
export class TutorDetailsPageModule {}
