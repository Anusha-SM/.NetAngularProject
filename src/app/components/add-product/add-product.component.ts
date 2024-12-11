import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl:'./add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  // name: string='';
  // type: string='';
  // price: number=0;
  productlist:any=[];

  constructor(private productService:ProductService){ // using this constructor we are creating object for service class

  }
  ngOnInit(){
    this.getAll();
  }

  productData:Product={
    id:0,
    name:'',
    productType:'',
    description:'',
    price:0
  }

//component  
//  name:string='', //how to decrale variable in Typescript
//  producttype:string='',
//  price:number=0,
 
//  listDeatils:any=[];

//Component methods
 addProduct(){
  //this.productlist.push({"id":this.productData.id,"name":this.productData.name,"producttype":this.productData.producttype,"description":this.productData.description,"price":this.productData.price})
  this.productService.addProduct(this.productData).subscribe({  
    next:(response)=>{
      //alert('Product added')
      console.log(response); //response is object refrence in .net ProductController
      alert(response.result);
      this.getAll();
    },
    error:(err)=>{
      alert(err);
    }
  })// here we are passing Product model refrence 
}

 resetProduct(){
  this.productData.id=0;
  this.productData.name='';
  this.productData.productType='';
  this.productData.description='';
  this.productData.price=0;
  alert('Reset Product is done');
 }

 getAll(){
  this.productService.getAll().subscribe(
  {
      next:(response:any)=>{
        this.productlist=response.result;
    },
    error:(err:any)=>{
      console.log(err);
    }
  })
 }
 getProductData(e:Product){
  console.log(e);
   this.productData=e;

 }
}
