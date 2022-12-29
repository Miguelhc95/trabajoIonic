import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ExercisesService } from '../services/exercises.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  exerciseList: any[] = [];

  constructor(
    private router: Router,
    private exercisesService: ExercisesService
    
  ) { }

  ngOnInit() {
  }

  search(searchString: any){
    
    //transformación en minúsculas requerida para buscar en la api
    searchString = searchString.toLowerCase();

    this.exercisesService.search(searchString).subscribe((data: any) => {
      console.log(data);
      this.exerciseList = data;
    });

  }

  viewDetail(exercise: any){
    const navigationExtras: NavigationExtras = {
      state: {
        exercise
      }
    };
    this.router.navigate(['exercise-detail'], navigationExtras);
  }



}
