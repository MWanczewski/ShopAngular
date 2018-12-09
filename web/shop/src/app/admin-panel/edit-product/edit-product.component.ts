import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";
import {ProductModel} from "../../shared/model/product.model";
import {ProductService} from "../../shared/service/product.service";
import {ActivatedRoute} from "@angular/router";
import {ProductCategoryModel} from "../../shared/model/product-category.model";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product: ProductModel = new ProductModel();
  categories: Array<ProductCategoryModel> = [];

  constructor(private productService: ProductService,
              private location: Location,
              private route: ActivatedRoute){}

  ngOnInit() {
    if (this.route.snapshot.data['product']){
      this.product = this.route.snapshot.data['product'];
    }
    if (this.route.snapshot.data['productCategories']){
      this.categories = this.route.snapshot.data['productCategories']
    }
    // console.log(this.product);
    // console.log(this.categories);
  }
  saveProduct(){
    this.productService.saveProduct(this.product).subscribe( ()=>{
      this.back();
    });
  }
  back(){
    this.location.back();
  }

}

// import { Component, OnInit } from '@angular/core';
//
// @Component({
//   selector: 'app-edit-product',
//   templateUrl: './edit-product.component.html',
//   styleUrls: ['./edit-product.component.css']
// })
// export class EditProductComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
// }

