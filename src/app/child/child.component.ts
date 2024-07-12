import { Component } from '@angular/core';

import {StoreService} from "../services/store.service"

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  notification:any

  constructor(private service:StoreService){

    this.service.notifySubject.subscribe(data=>this.notification=data)

  }



}
