import { Component, OnInit } from '@angular/core';
import {BasketModel} from "../shared/model/basket.model";
import {BasketService} from "../shared/service/basket.service";

@Component({
  selector: 'app-baskets',
  templateUrl: './baskets.component.html',
  styleUrls: ['./baskets.component.css']
})
export class BasketsComponent implements OnInit {

  basket: BasketModel = new BasketModel();

  constructor(private basketService: BasketService) { }

  ngOnInit() {
    this.basketService.getBasketStream()
        .subscribe((basket: BasketModel) => {
            this.basket = basket;
    });
  }

  isEmptyBasket(): boolean{
    return this.basketService.isEmpty();
  }

  updateBasket(){
    this.basketService.updateBasket(this.basket);
  }

  clearBasket(){
    this.basketService.clearBasket();
  }

  basketSummary(): number {
    return this.basketService.summary();
  }

  removeFromBasket(warehouseItemId: number){
    console.log(warehouseItemId);
    this.basketService.removeItem(warehouseItemId);
  }
}

