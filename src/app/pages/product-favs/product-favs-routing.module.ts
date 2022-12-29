import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductFavsPage } from './product-favs.page';

const routes: Routes = [
  {
    path: '',
    component: ProductFavsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductFavsPageRoutingModule {}
