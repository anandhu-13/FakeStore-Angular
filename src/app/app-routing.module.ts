import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';
import { CartsummaryComponent } from './cartsummary/cartsummary.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

const routes: Routes = [
  
  {path:"products/:id",component:ProductDetailComponent},

  {path:"cart", component:CartsummaryComponent},

  {path:"checkout", component:CheckoutComponent},

  {path:"orders", component:OrderSummaryComponent},

  {path:"",component:HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
