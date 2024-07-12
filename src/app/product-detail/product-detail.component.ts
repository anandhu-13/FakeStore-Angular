import { Component } from '@angular/core';

import { ActivatedRoute} from "@angular/router"
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

  id:any

  product:any

  constructor(private route:ActivatedRoute, private service:StoreService){

    // console.log(this.route.snapshot.params["id"]);
    this.id = this.route.snapshot.params["id"]

    this.service.getProductDetail(this.id).subscribe(data=>this.product=data)
    
    
  }

}
