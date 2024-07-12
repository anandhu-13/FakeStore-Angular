import { Component } from '@angular/core';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent {

  product:any

  constructor(private service:StoreService){
    // this.service.getProducts().then(response=>response.json()).then(data=>{
    //   // console.log(data);

    //   this.product=data      
    // })

    this.service.getProducts().subscribe(data=>this.product=data)

    this.service.categorySubject.subscribe((categoryName:any)=>this.filterProductsByCategoryName(categoryName))
    
    
  }


  filterProductsByCategoryName(categoryName:string){
    this.service.getProductsByCategoryName(categoryName).subscribe(data=>this.product=data)
  }


      


}
