import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './PAGES/authentication/authentication.component';
import { CartComponent } from './PAGES/cart/cart.component';
import { LandingpageComponent } from './PAGES/landingpage/landingpage.component';
import { ProductDetailsComponent } from './PAGES/product-details/product-details.component';
import { ProductListComponent } from './PAGES/product-list/product-list.component';

const routes: Routes = [
  { path: '', component: LandingpageComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: AuthenticationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
