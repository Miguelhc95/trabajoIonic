import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  web_get_restricted = 0;
  web_post_restricted = 0;
  web_put_restricted = 0;
  web_delete_restricted = 0;

  android_get_restricted = 0;
  android_post_restricted = 0;
  android_put_restricted = 0;
  android_delete_restricted = 0;

  ios_get_restricted = 0;
  ios_post_restricted = 0;
  ios_put_restricted = 0;
  ios_delete_restricted = 0;

  //url = 'http://world.openfoodfacts.org/api/v0/product/';
  url = 'http://world.openfoodfacts.org/api/v2/search?code=';

  constructor(private http: HttpClient) { }

  search(searchString: string){
    return this.http.get(this.url+searchString); 
  }
}
