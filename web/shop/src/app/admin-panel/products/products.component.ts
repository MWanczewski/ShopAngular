import { Component, OnInit } from '@angular/core';
import {ProductModel} from "../../shared/model/product.model";
import {ProductService} from "../../shared/service/product.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Array<ProductModel> = [];

  constructor(private productService: ProductService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    if(this.route.snapshot.data['products'])
    this.products = this.route.snapshot.data['products'];

    console.log(this.products);
  }

  removeProduct(productId: number, index: number) {
    this.productService.removeProduct(productId).subscribe(() => {
      this.products.splice(index, 1);
    });
  }

}
