import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExerciseFavsPageRoutingModule } from './exercise-favs-routing.module';

import { ExerciseFavsPage } from './exercise-favs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExerciseFavsPageRoutingModule
  ],
  declarations: [ExerciseFavsPage]
})
export class ExerciseFavsPageModule {}
