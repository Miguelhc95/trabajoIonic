import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Storage } from '@ionic/storage';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  userMail: any;
  state: any;
  favoritesExercises: any[] = [];
  favoritesProducts: any[] = [];
  darkMode: boolean = true;

  constructor(
    public authService: AuthenticationService,
    public router: Router,
    public favSrvc: FavoritesService,
    public storage: Storage){
      this.storage.create();
      this.getExercisesFromStorage();
      this.getProductsFromStorage();
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
      this.darkMode = prefersDark.matches;
            
    }
    

  ngOnInit() {
  }

  change() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark');
  }

  viewDetailExercise(exercise: any){
    const navigationExtras: NavigationExtras = {
      state: {
        exercise
      }
    };
    this.router.navigate(['exercise-detail'], navigationExtras);
  }

  viewDetailProduct(producto: any){
    const navigationExtras: NavigationExtras = {
      state: {
        producto
      }
    };
    this.router.navigate(['product-detail'], navigationExtras);
  }

  sendMailToTechnicalService(){
    window.open('mailto:mhernandezco.inf@upsa.es');
  }

  getExercisesFromStorage(){   
    this.favSrvc.getEjerciciosFavoritos().then((value:any)=>{
      this.favoritesExercises=value;
    });

    
  }

  handleRefresh(event: any) {
    setTimeout(() => {
      this.getExercisesFromStorage();
      this.getProductsFromStorage();
      event.target.complete();
    }, 2000);
  };

  getProductsFromStorage(){
    this.favSrvc.getProductosFavoritos().then((value:any)=>{
      this.favoritesProducts=value;
    });

  }

  goToExerciseFavs(){
    this.router.navigate(['exercise-favs']);
  }

  goToProductFavs(){
    this.router.navigate(['product-favs']);
  }


  goToSettings(){
    this.router.navigate(['settings']);
  }

  showHelp(){
    window.alert("¡BIENVENIDO A FITTRUCK!\nSu app de nutrición y ejercicio rápida y sencilla\n\n Antes de todo no olvide registrarse con su correo y validarlo \n\n Disfrute de nuestro buscador de ejercicios por músculo a trabajar, \n de nuestro escáner de productos alimenticios con información nutricional\n y ante cualquier duda póngase en contacto con nosotros desde el submenú de la pantalla principal. \n\n ¡Qúe disfrute! \n\n Atte. Silvia & Miguel - Máster MIMO UPSA 2022/2023");
  }

  toSearch(){
    this.router.navigate(['search']);
  }

  toScanner(){
    this.router.navigate(['scan']);
  }
}

