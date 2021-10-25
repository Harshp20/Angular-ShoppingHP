import { AuthGuard } from './services/auth.guard';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent} from './Components/signup/signup.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';
import { ProductsComponent } from './Components/products/products.component';
import { CartComponent } from './Components/cart/cart.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'products', pathMatch: 'full'},
  {path:'products', component: ProductsComponent, 
  canActivate: [AuthGuard]
  },
  {path:'cart', component: CartComponent},
  {path: 'wishlist', component: WishlistComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CartComponent, ProductsComponent, WishlistComponent, LoginComponent, SignupComponent];