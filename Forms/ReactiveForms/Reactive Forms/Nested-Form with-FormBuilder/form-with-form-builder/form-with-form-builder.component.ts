import { Component,OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';



@Component({
  selector: 'app-form-with-form-builder',
  templateUrl: './form-with-form-builder.component.html',
  styleUrls: ['./form-with-form-builder.component.css']
})
export class FormWithFormBuilderComponent implements OnInit {

  categoryArr:string[] = [];
  productArr:string[]=[]

  productForm!: FormGroup;
  constructor(private fb:FormBuilder){
  }

  categoriesObj:any = {
    "Electronics" : ['Mobile','laptop','smart TV','Headphones','Camera'],
    "Grocery" : ['Bread','Milk','Rice','Cereal'],
    "Furniture" : ['chair','sofa','Bed','Table','Cabinet'],
    "Clothing" : ['T-shirt','pants','Jeans','Dress','Shoes','Jacket'],
    "Beauty" : ['Shampoo','Conditioner','Perfume','FaceWash'],

  }
  productQuantity!:any;
  productPrice!:any;
  ngOnInit(): void {
    this.categoryArr = Object.keys(this.categoriesObj)
    this.createForm();

    this.productForm.get('category')?.valueChanges.subscribe((category)=>{
      this.productArr = this.categoriesObj[category];  //this.productForm.get('productName')?.value
    });


//quantity * price ----------------
    // this.productForm.get('quantity')?.valueChanges.subscribe((quantity)=>{
    //   let quan = quantity;
    //   this.productForm.get('price')?.valueChanges.subscribe((price)=>{
    //   let total = quan * price || '';
    //   console.log(price)
    //   this.productForm.get('totalPrice')?.setValue(total)

    //   })
    // })

    // this.productForm.get('price')?.valueChanges.subscribe((price)=>{
    //   let prc = price;
    //   this.productForm.get('quantity')?.valueChanges.subscribe((quantity)=>{
    //   let total = prc * quantity || '';
    //   console.log(price)
    //   this.productForm.get('totalPrice')?.setValue(total)

    //   })
    // })
// --------------------------------------------

this.productForm.get('quantity')?.valueChanges.subscribe((el)=>{
  this.productQuantity = el;
  if((this.productQuantity)&&(this.productPrice)){
    this.productForm.get('totalPrice')?.setValue(this.productPrice*this.productQuantity);
  }else{
    this.productForm.get('totalPrice')?.setValue('');
  }
});

this.productForm.get('price')?.valueChanges.subscribe((el)=>{
  this.productPrice = el;
  if(this.productQuantity && this.productPrice){
    this.productForm.get('totalPrice')?.setValue(this.productPrice*this.productQuantity)
  }else{
    this.productForm.get('totalPrice')?.setValue('');
  }
})

// ----------------------------------------------

  }
  createForm(){
    this.productForm = this.fb.group({
      category : ['',[Validators.required,]],
      productName : ['',[Validators.required,]],
      quantity : ['',[Validators.required,Validators.pattern('^[0-9]+$')]],
      price : ['',[Validators.required,Validators.pattern('^[0-9]+$')]],
      totalPrice : ['',[Validators.required,]]
    })
  }

get category(){
  return this.productForm.get('category')
  // return this.productForm.controls['category']
}
get productName(){
  return this.productForm.get('productName')
}
get quantity(){
  return this.productForm.get('quantity')
}
get price(){
  return this.productForm.get('price')
}
get totalPrice(){
  return this.productForm.get('totalPrice')
}

saveForm(){
  console.log("form",this.productForm.value)
}

getData(){
  let obj={
    category : "Electronics",
    productName : "laptop",
    quantity : 2,
    price : 100000,
    totalPrice : 200000
  }
  this.productForm.setValue(obj);
  // this.productArr = this.categoriesObj[obj.category];



}

patchData(){
  let patchObj={
    category : "Electronics",
    productName : "laptop",
    quantity : 2,
    price : 100000,
    totalPrice : 200000
  }

  this.productForm.patchValue(patchObj);
}
reset(){
  this.productForm.reset();
}


}
