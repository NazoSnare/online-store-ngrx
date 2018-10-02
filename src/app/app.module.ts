import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './components/product/product.component';

import { StoreModule } from "@ngrx/store"; 
import { reducer } from './store/reducer';

const routes: Routes = [  
  {
      path: '',
      redirectTo: '/products',
      pathMatch: 'full'
  },
  {
      path: 'products',
      component: ProductsComponent
  },
  {
      path: 'cart',
      component: CartComponent
  },
  {
      path: 'product/:id',
      component: ProductComponent
  },
  {
      path: '**',
      redirectTo: '',
      pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CartComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({cart: reducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
