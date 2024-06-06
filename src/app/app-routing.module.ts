import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductSellComponent } from './pages/product-sell/product-sell.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'sell-point', component: ProductSellComponent },
  { path: 'cart', component: CartComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: '', redirectTo: '/sell-point', pathMatch: 'full' }, // redirect to `product-list`
  //{ path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
