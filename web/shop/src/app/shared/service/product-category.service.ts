import { Injectable } from '@angular/core';
import {ProductCategoryModel} from "../model/product-category.model";
import {Observable} from "rxjs/internal/Observable";
import {map, startWith} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs/internal/Subject";

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {

  private productCategories: Array<ProductCategoryModel> = [];
  private productCategoriesStream: Subject<Array<ProductCategoryModel>> = new Subject();

  constructor(private http: HttpClient) { }

  public getProductCategories(): Observable<Array<ProductCategoryModel>> {
    return this.http.get("/api/product-categories/open").pipe(map((response: Array<ProductCategoryModel>) => {
      this.productCategories = response;
      this.productCategoriesStream.next(this.productCategories);
      return this.productCategories;
    }));
  }

  public getProductCategory(id: number): Observable<ProductCategoryModel> {
    return this.http.get("/api/product-categories/open/" + id).pipe(map((response: ProductCategoryModel) => {
      return response;
    }));
  }

  public getProductCategoriesStream(): Observable<Array<ProductCategoryModel>> {
    return this.productCategoriesStream.pipe(startWith(this.productCategories));
  }

  public removeProductCategory(id: number) {
    return this.http.delete("/api/product-categories/" + id);
  }

  public saveProductCategory(category: ProductCategoryModel): Observable<ProductCategoryModel> {
    if (category.id) {
      return this.http.put("/api/product-categories/" + category.id, category).pipe(map((response: ProductCategoryModel) => {
        return response;
      }));
    } else {
      return this.http.post("/api/product-categories", category).pipe(map((response: ProductCategoryModel) => {
        return response;
      }));
    }
  }

}
