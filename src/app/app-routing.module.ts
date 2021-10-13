import { GroceriesComponent } from './Components/groceries/groceries.component';
import { HeaderComponent } from './Components/header/header.component';
import { CartComponent } from './Components/cart/cart.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'groceries', component: GroceriesComponent},
  {path:'cart', component: CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CartComponent, GroceriesComponent];