import { AuthGuard } from './services/auth.guard';
import { WishlistService } from './services/wishlist.service';
import { FetchapiService } from './services/fetchapi.service';
import { CartServiceService } from './services/cart-service.service';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokencatchService } from './services/tokencatch.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    routingComponents,    
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    AuthService,
    CartServiceService,
    FetchapiService,
    WishlistService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokencatchService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
