import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductFavsPageRoutingModule } from './product-favs-routing.module';

import { ProductFavsPage } from './product-favs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductFavsPageRoutingModule
  ],
  declarations: [ProductFavsPage]
})
export class ProductFavsPageModule {}
