import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExerciseFavsPage } from './exercise-favs.page';

const routes: Routes = [
  {
    path: '',
    component: ExerciseFavsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExerciseFavsPageRoutingModule {}
