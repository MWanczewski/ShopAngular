import { Component, OnInit } from '@angular/core';
import {ProductCategoryService} from "../../shared/service/product-category.service";
import {ProductCategoryModel} from "../../shared/model/product-category.model";
import {Location} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-product-category',
  templateUrl: './edit-product-category.component.html',
  styleUrls: ['./edit-product-category.component.css']
})
export class EditProductCategoryComponent implements OnInit {

 category: ProductCategoryModel = new ProductCategoryModel();

  constructor(private productCategoryService: ProductCategoryService,
              private location: Location,
              private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.route.snapshot.data['category']) {
      this.category = this.route.snapshot.data['category'];
    }
  }

  saveProductCategory() {
    this.productCategoryService.saveProductCategory(this.category).subscribe(() => {
      this.back();
    });
  }

  back() {
    this.location.back();
  }
}
