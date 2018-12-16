import { Component, OnInit } from '@angular/core';
import {WarehouseComponent} from "../admin-panel/warehouse/warehouse.component";
import {ActivatedRoute} from "@angular/router";
import {WarehouseModel} from "../shared/model/warehouse.model";
import {BasketItemModel} from "../shared/model/basket-item.model";
import {BasketService} from "../shared/service/basket.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items: Array<WarehouseModel>=[];

  constructor(private route: ActivatedRoute, private basketService: BasketService) { }

  ngOnInit() {
    if (this.route.snapshot.data['items']){
      this.items = this.route.snapshot.data['items'];
    }
  }

  addtoBasket(item: WarehouseModel){
    let shoppingBasketItem = new BasketItemModel(item,1);
    this.basketService.addItem(shoppingBasketItem);
  }

  isInBasket(warehouseId: number): boolean{
    return this.basketService.containsItem(warehouseId);
  }
}

