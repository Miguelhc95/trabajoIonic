import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {

  productData: any;
  state: any;

  constructor(private router: Router, private favSrvc: FavoritesService,private actionSheetCtrl: ActionSheetController) {
    if( this.router.getCurrentNavigation()?.extras?.state){
      this.productData=this.router.getCurrentNavigation()?.extras?.state?.['producto'];
      console.log(this.productData);      
    }
    
  }

  async mostrarMenuFav(){
    
    const actionSheet = await this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Añadir a Favoritos',
          icon: 'star',
          handler: () => {
            this.favSrvc.saveFavsProducts(this.productData);
          }
        },  
        {
          text: 'Eliminar de Favoritos',
          icon: 'trash',
          handler: () => {
            this.favSrvc.deleteFavsProducts(this.productData);
          }
        },             
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log("Cancel clicked");
          }
        },
      ],
    });

    await actionSheet.present();

    
  
}

  ngOnInit() {
  }

}
