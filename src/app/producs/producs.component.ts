import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../modele/Product';

@Component({
  selector: 'app-producs',
  templateUrl: './producs.component.html',
  styleUrls: ['./producs.component.css']
})
export class ProducsComponent {
  constructor(private r:Router){

  }

  listProdcut:Product[]=[
    {id: 1, title: "T-shirt 1", price: 18, quantity: 0, like: 0},
    {id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0},
    {id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0}, ]

buy(p: Product){
p.quantity--;
}
show(id:number){
  this.r.navigate(["/products/details", id]);
}
show1(id:number){
  this.r.navigate(["/Product/ProductDetails", id]);
}
add(){
  this.r.navigate(["/addproduct"]);
}




}
