import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-exercise-detail',
  templateUrl: './exercise-detail.page.html',
  styleUrls: ['./exercise-detail.page.scss'],
})
export class ExerciseDetailPage implements OnInit {

  exercise: any;
  state: any;
 
  constructor(private router: Router, private actionSheetCtrl: ActionSheetController, private favSrvc: FavoritesService) { 

    if( this.router.getCurrentNavigation()?.extras?.state){
      this.exercise=this.router.getCurrentNavigation()?.extras?.state?.['exercise'];      
    }       

    
  }

  async mostrarMenuFav(){
      const actionSheet = await this.actionSheetCtrl.create({
        buttons: [
          {
            text: 'Añadir a Favoritos',
            icon: 'star',
            handler: () => {
              this.favSrvc.saveFavsExercises(this.exercise);
            }
          },  
          {
            text: 'Eliminar de Favoritos',
            icon: 'trash',
            handler: () => {
              this.favSrvc.deleteFavsExercises(this.exercise);
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
