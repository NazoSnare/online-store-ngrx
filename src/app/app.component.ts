import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-root',
  template: `
  Cart: {{cart.length}}
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
  cart: Array<any>

  constructor( private _store: Store<any>){

  }

  ngOnInit(){
    this._store.select('cart').subscribe( state => this.cart =state);
  }
}
