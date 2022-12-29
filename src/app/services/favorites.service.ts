import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular'; 

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  exercisesFav: any[] = [];
  productsFav: any[] = [];

  constructor(
    private storage: Storage,
    private toastCtrl: ToastController,
    ) {
      this.storage.create(); 
      this.getEjerciciosFavoritos();
      this.getProductosFavoritos();
    }

  saveFavsExercises(exercise: any){
    const exists=this.exercisesFav.find(e => e.name === exercise.name);

    if(exists){
      this.presentToastAdd('Ya existe en Favoritos')
    }else{
      this.exercisesFav.unshift(exercise);
      this.storage.set('EjercicioFavoritos',this.exercisesFav);
      this.presentToastAdd("Guardado en Favoritos");
    }
  }
  saveFavsProducts(product: any){
    const exists=this.productsFav.find(e => e.product_name_es === product.product_name_es);

    if(exists){
      this.presentToastAdd('Ya existe en Favoritos')
    }else{
      this.productsFav.unshift(product);
      this.storage.set('ProductoFavoritos',this.productsFav);
      this.presentToastAdd("Guardado en Favoritos");
    }
  }

  async presentToastAdd(texto: string) {
    const toast = await this.toastCtrl.create({
      message: texto,
      duration: 1500,
      icon: 'star'
    });

    await toast.present();
  }

  async presentToastDelete(texto: string) {
    const toast = await this.toastCtrl.create({
      message: texto,
      duration: 1500,
      icon: 'trash'
    });

    await toast.present();
  }

  async getEjerciciosFavoritos(){
    const fav = await this.storage.get('EjercicioFavoritos');

    if(fav){
      this.exercisesFav = fav;
      return this.exercisesFav;
    }
    return null;
  }

  async getProductosFavoritos(){
    const fav = await this.storage.get('ProductoFavoritos');

    if(fav){
      this.productsFav = fav;
      return this.productsFav;
    }
    return null;
  }

  deleteFavsExercises(exercise: any){
    const exists=this.exercisesFav.find(e => e.name === exercise.name);

    if(exists){
      this.exercisesFav=this.exercisesFav.filter(fav => fav.name !== exercise.name);
      this.storage.set('EjercicioFavoritos', this.exercisesFav);
      this.presentToastDelete("Eliminado de Favoritos");
    }else{      
      this.presentToastDelete('No existe en Favoritos');
    }
  }

  deleteFavsProducts(product: any){
    const exists=this.productsFav.find(e => e.product_name_es === product.product_name_es);

    if(exists){
      this.productsFav=this.productsFav.filter(fav => fav.product_name_es !== product.product_name_es);
      this.storage.set('ProductoFavoritos', this.productsFav);
      this.presentToastDelete("Eliminado de Favoritos");
    }else{
      this.presentToastDelete('No existe en Favoritos');
    }
  }

}
