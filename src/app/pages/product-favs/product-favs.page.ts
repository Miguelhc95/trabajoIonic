import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FavoritesService } from 'src/app/services/favorites.service';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-product-favs',
  templateUrl: './product-favs.page.html',
  styleUrls: ['./product-favs.page.scss'],
})
export class ProductFavsPage implements OnInit {

  favoritesProducts: any[] = [];

  constructor(
    public authService: AuthenticationService,
    public router: Router,
    public favSrvc: FavoritesService,
    public storage: Storage){
      this.storage.create();
      this.getProductsFromStorage();
            
  }

  viewDetailProduct(producto: any){
    const navigationExtras: NavigationExtras = {
      state: {
        producto
      }
    };
    this.router.navigate(['product-detail'], navigationExtras);
  }

  handleRefresh(event: any) {
    setTimeout(() => {
      this.getProductsFromStorage();
      event.target.complete();
    }, 2000);
  };

  getProductsFromStorage(){
    this.favSrvc.getProductosFavoritos().then((value:any)=>{
      this.favoritesProducts=value;
    });

  }



  ngOnInit() {
  }

}
