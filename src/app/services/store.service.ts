import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http"

import {Subject} from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  public categorySubject= new Subject()

  public notifySubject = new Subject()

  constructor(private http:HttpClient) { }

  getProducts(){

    // return fetch("https://fakestoreapi.com/products")
    return this.http.get("https://fakestoreapi.com/products")
  }

  getCategories(){

    // return fetch("https://fakestoreapi.com/products/categories")
    return this.http.get("https://fakestoreapi.com/products/categories")

  }


  dispatchMessage(message:any){
    // console.log(message);

    this.notifySubject.next(message)
      
  }

  dispatchCategoryName(categoryName:string){

    // console.log(categoryName);
    this.categorySubject.next(categoryName)

  }


  getProductsByCategoryName(categoryName:string){

    return this.http.get(`https://fakestoreapi.com/products/category/${categoryName}`)

  }

  getProductDetail(id:any){

    return this.http.get(`https://fakestoreapi.com/products/${id}`)
  }

}
