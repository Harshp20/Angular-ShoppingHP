import { LoginComponent } from './Components/login/login.component';
import { SignupComponent} from './Components/signup/signup.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';
import { GroceriesComponent } from './Components/groceries/groceries.component';
import { CartComponent } from './Components/cart/cart.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'groceries', pathMatch: 'full'},
  {path:'groceries', component: GroceriesComponent},
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
export const routingComponents = [CartComponent, GroceriesComponent, WishlistComponent, LoginComponent, SignupComponent];