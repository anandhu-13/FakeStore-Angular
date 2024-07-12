import { Component } from '@angular/core';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  constructor(private service:StoreService){

  }

  sendMessage(){
    // console.log("Inside parent");

    this.service.dispatchMessage("Helloooooo")
    
  }



}
