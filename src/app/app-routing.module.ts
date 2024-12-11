import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
   { path: '',redirectTo: 'home', pathMatch: 'full'},
   { path: 'home', component:HomeComponent},
   { path: 'products', component:AddProductComponent},
   { path: 'categories', component:CategoriesComponent},
   { path: 'cart', component:CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
