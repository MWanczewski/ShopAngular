import { Component, OnInit } from '@angular/core';
import {WarehouseModel} from "../../shared/model/warehouse.model";
import {WarehouseService} from "../../shared/service/warehouse.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit {
  warehouses: Array<WarehouseModel> = [];
  products = [];

  constructor(private warehouseService: WarehouseService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.warehouses = this.route.snapshot.data['warehouses'];
    console.log(this.warehouses);
  }

  removeWarehouse(warehouseId: number, index: number) {
    this.warehouseService.removeWarehouse(warehouseId).subscribe(() => {
      this.warehouses.splice(index, 1);
    });
  }

}
