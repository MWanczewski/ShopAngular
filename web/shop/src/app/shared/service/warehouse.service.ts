import {Injectable} from "@angular/core";
import {Observable, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map, startWith} from "rxjs/operators";
import {WarehouseModel} from "../model/warehouse.model";


@Injectable({
  providedIn: 'root'
})
export class WarehouseService {
  private warehouses: Array<WarehouseModel> = [];
  private warehousesStream: Subject<Array<WarehouseModel>> = new Subject();

  constructor(private http: HttpClient) {
  }

  public getWarehouses(): Observable<Array<WarehouseModel>> {
    return this.http.get("/api/stocks/open").pipe(map((response: Array<WarehouseModel>) => {
      this.warehouses = response;
      this.warehousesStream.next(this.warehouses);
      return this.warehouses;
    }));
  }
  public getWarehousesStream(): Observable<Array<WarehouseModel>> {
    return this.warehousesStream.pipe(startWith(this.warehouses));
  }
  public removeWarehouse(id: number) {
    return this.http.delete("/api/stocks/" + id);
  }

  public getWarehouse(id: number): Observable<WarehouseModel> {
    return this.http.get("/api/stocks/open/" + id).pipe(map((response: WarehouseModel) => {
      return response;
    }));
  }

  public saveWarehouse(warehouse: WarehouseModel): Observable<WarehouseModel> {
    if(warehouse.id) {
      return this.http.put("/api/stocks/" + warehouse.id, warehouse).pipe(map((response : WarehouseModel) => {
        return response;
      }));
    } else {
      return this.http.post("/api/stocks", warehouse ).pipe(map((response : WarehouseModel) => {
        return response;
      }));
    }

  }
}
