import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-productlist',
  templateUrl:'./productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent {
  @Input() productlistdata:any; // receiving input from parent component
  @Output() productDataEmitter:EventEmitter<Product>=new EventEmitter<Product>();
  constructor(private productservice2:ProductService){

  }
  
  /*@Output() productlistdetails=new EventEmitter<string>();
 Here this method is used for output parameter
 public btnClick():void{
  this.productlistdetails.emit("This text is from child component");
 }
  ngOnInit():void{
}*/

editProduct(id:any){
  alert(id);
  this.productservice2.getById(id).subscribe({
    next:(response)=>{
      //response.result.id,
      //response.result.name,
      //response.result.prize
      this.productDataEmitter.emit(response);
    },
    error:(err)=>{

    }
  })
}
deleteProduct(id:any){
  alert(id);
}
}
