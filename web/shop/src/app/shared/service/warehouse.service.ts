import {Injectable} from "@angular/core";
import {Observable, Subject} from "rxjs";

import {HttpClient} from "@angular/common/http";
import {map, startWith} from "rxjs/operators";
import {ProductCategoryModel} from "../model/product-category.model";
import {WarehouseModel} from "../model/warehouse.model";
import {ProductModel} from "../model/product.model";

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {
  private warehouses: Array<WarehouseModel> = [];
  private warehousesStream: Subject<Array<WarehouseModel>> = new Subject();

  constructor(private http: HttpClient) {
  }

  public getWarehouses(): Observable<Array<WarehouseModel>> {
    return this.http.get("/api/stocks").pipe(map((response: Array<WarehouseModel>) => {
      this.warehouses = response;
      this.warehousesStream.next(this.warehouses);
      return this.warehouses;
    }));
  }
  public getWarhousesStream(): Observable<Array<WarehouseModel>> {
    return this.warehousesStream.pipe(startWith(this.warehouses));
  }
  public removeWarehouse(id: number) {
    return this.http.delete("/api/stocks/" + id);
  }
  public getProduct(id: number): Observable<ProductModel> {
    return this.http.get("/api/products/" + id).pipe(map((response: ProductModel) => {
      return response;
    }));
  }
  public getWarehouse(id: number): Observable<WarehouseModel> {
    return this.http.get("/api/stocks/" + id).pipe(map((response: WarehouseModel) => {
      return response;
    }));
  }

  public saveWarehouse(warehause: WarehouseModel): Observable<WarehouseModel> {
    if(warehause.id) {
      return this.http.put("/api/stoks/" + warehause.id, warehause).pipe(map((response : WarehouseModel) => {
        return response;
      }));
    } else {
      return this.http.post("/api/stoks/", warehause ).pipe(map((response : WarehouseModel) => {
        return response;
      }));
    }

  }
}
