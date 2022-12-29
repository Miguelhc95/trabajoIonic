import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ExercisesService {

  url = 'https://exercisedb.p.rapidapi.com/exercises/target/';
  headers = new HttpHeaders().set('X-RapidAPI-Key','96ae88e690msh852070c9fef9911p1b64e9jsn8108b2d9bb69').set('X-RapidAPI-Host','exercisedb.p.rapidapi.com');

  /* 
  0:"abductors"
  1:"abs"
  2:"adductors"
  3:"biceps"
  4:"calves"
  5:"cardiovascular system"
  6:"delts"
  7:"forearms"
  8:"glutes"
  9:"hamstrings"
  10:"lats"
  11:"levator scapulae"
  12:"pectorals"
  13:"quads"
  14:"serratus anterior"
  15:"spine"
  16:"traps"
  17:"triceps"
  18:"upper back
  */



  constructor(private http: HttpClient) { }

  search(searchString: string){
    return this.http.get(this.url+searchString, {headers: this.headers}); 
  }
}
