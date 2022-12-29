import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public barcodeData: any;
  public productData: any;
  public productList: any[] = [];

  constructor(
    private router: Router,
    private productService: ProductService,
    private barcodeScanner: BarcodeScanner,
  ) {}

scan() {
    this.barcodeScanner.scan().then((data: any) => {
      this.barcodeData = data.text;

      if (this.barcodeData != undefined && this.barcodeData != '') {      

        alert("Código obtenido: " + this.barcodeData);

        if(this.productList.length === 0){          
          alert("Producto escaneado correctamente");
          this.productList.push(this.barcodeData);
          
        }else{
          for(let elemento of this.productList){
            if(elemento === this.barcodeData){
              alert("Producto ya escaneado");
  
            }else{
              alert("Producto escaneado correctamente");
              this.productList.push(this.barcodeData);
            }
          }         
        }
      }

    }).catch((err: string) => {
      window.alert("Error: " + err);
    });
     
  }

  fetchData(barcode: any) {     
    this.productService.search(barcode).subscribe((data: any) => { 
        console.log(data);             
        this.viewDetail(data.products[0]);
      }, (err) => {          
        console.log(err);        
    });   
     
}

viewDetail(producto: any){
  const navigationExtras: NavigationExtras = {
    state: {
      producto
    }
  };
  this.router.navigate(['product-detail'], navigationExtras);
}
    

  ngOnInit() {
  }

}
