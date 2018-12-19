import { Component, OnInit } from '@angular/core';
import {ProductCategoryModel} from "../../shared/model/product-category.model";
import {ProductCategoryService} from "../../shared/service/product-category.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.css']
})
export class ProductCategoriesComponent implements OnInit {

 categories: Array<ProductCategoryModel> = [];

  constructor(private productCategoryService: ProductCategoryService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.categories = this.route.snapshot.data['categories'];
  }

  removeProductCategory(categoryId: number, index: number) {
    this.productCategoryService.removeProductCategory(categoryId).subscribe(() => {
      this.categories.splice(index, 1);
    });
  }

}
