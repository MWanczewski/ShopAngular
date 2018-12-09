import {Injectable} from "@angular/core";
import {Observable, Subject} from "rxjs";

import {HttpClient} from "@angular/common/http";
import {map, startWith} from "rxjs/operators";
import {ProductCategoryModel} from "../model/product-category.model";
import {WarehouseModel} from "../model/warehouse.model";

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {
  private warehouses: Array<WarehouseModel> = [];
  private warehousesStream: Subject<Array<WarehouseModel>> = new Subject();

  constructor(private http: HttpClient) {
  }

  public getWarehauses(): Observable<Array<WarehouseModel>> {
    return this.http.get("/api/stocks").pipe(map((response: Array<WarehouseModel>) => {
      this.warehouses = response;
      this.warehousesStream.next(this.warehouses);
      return this.warehouses;
    }));
  }
  public getWarhausesStream(): Observable<Array<WarehouseModel>> {
    return this.warehousesStream.pipe(startWith(this.warehouses));
  }
  public removeWarehouse(id: number) {
    return this.http.delete("/api/stocks/" + id);
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
