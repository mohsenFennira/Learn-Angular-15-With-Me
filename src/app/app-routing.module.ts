import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { DetailsComponent } from './details/details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProducsComponent } from './producs/producs.component';

const routes: Routes = [
{path: "", redirectTo: 'products', pathMatch: 'full'},
//{path: '**', component: NotFoundComponent},
 {path:"products",component:ProducsComponent},
 {path:"details",component:DetailsComponent},
 {path:"products/details/:id",component:DetailsComponent},
 {path:"addproduct",component:AddProductComponent},
 {path:"404",component:NotFoundComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
