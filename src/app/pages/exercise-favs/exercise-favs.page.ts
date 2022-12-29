import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FavoritesService } from 'src/app/services/favorites.service';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-exercise-favs',
  templateUrl: './exercise-favs.page.html',
  styleUrls: ['./exercise-favs.page.scss'],
})
export class ExerciseFavsPage implements OnInit {
  favoritesExercises: any[] = [];
  constructor(
    public authService: AuthenticationService,
    public router: Router,
    public favSrvc: FavoritesService,
    public storage: Storage){
      this.storage.create();
      this.getExercisesFromStorage();
            
  }

  viewDetailExercise(exercise: any){
    const navigationExtras: NavigationExtras = {
      state: {
        exercise
      }
    };
    this.router.navigate(['exercise-detail'], navigationExtras);
  }

  getExercisesFromStorage(){   
    this.favSrvc.getEjerciciosFavoritos().then((value:any)=>{
      this.favoritesExercises=value;
    });

    
  }

  handleRefresh(event: any) {
    setTimeout(() => {
      this.getExercisesFromStorage();
      event.target.complete();
    }, 2000);
  };

  ngOnInit() {
  }

}
