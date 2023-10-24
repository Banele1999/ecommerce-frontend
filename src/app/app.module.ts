import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './PAGES/product-list/product-list.component';
import { ProductDetailsComponent } from './PAGES/product-details/product-details.component';
import { CartComponent } from './PAGES/cart/cart.component';
import { AuthenticationComponent } from './PAGES/authentication/authentication.component';
import { LandingpageComponent } from './PAGES/landingpage/landingpage.component';
import { NavbarComponent } from './COMPONENTS/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailsComponent,
    CartComponent,
    AuthenticationComponent,
    LandingpageComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
