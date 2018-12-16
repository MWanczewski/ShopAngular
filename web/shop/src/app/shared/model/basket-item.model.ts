
import {WarehouseModel} from "./warehouse.model";

export class BasketItemModel {
  quantity: number = 0;
  warehouseItem: WarehouseModel = new WarehouseModel();

  public constructor(warehouse: WarehouseModel, quantity: number) {
    this.quantity = quantity;
    this.warehouseItem = warehouse;
  }

}
