import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    ProductListComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
