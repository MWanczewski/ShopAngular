import { Component, OnInit } from '@angular/core';
import {WarehouseService} from "../../shared/service/warehouse.service";
import {ActivatedRoute} from "@angular/router";
import {WarehouseModel} from "../../shared/model/warehouse.model";
import {Location} from "@angular/common";
import {ProductModel} from "../../shared/model/product.model";

@Component({
  selector: 'app-edit-warehouse',
  templateUrl: './edit-warehouse.component.html',
  styleUrls: ['./edit-warehouse.component.css']
})
export class EditWarehouseComponent implements OnInit {

  warehouse: WarehouseModel = new WarehouseModel();
  products: Array<ProductModel> = [];

  constructor(private warehouseService : WarehouseService,
              private location: Location,
              private route : ActivatedRoute) { }

  ngOnInit() {
    if(this.route.snapshot.data['warehouse']) {
      this.warehouse = this.route.snapshot.data['warehouse'];
    }
    if (this.route.snapshot.data['products']){
      this.products = this.route.snapshot.data['products'];
    }

  }
  saveWarehouse() {
    console.log(this.products);
    this.warehouseService.saveWarehouse(this.warehouse).subscribe(() => {
      this.back();

    });
  }
  back() {
    this.location.back();
  }
}
