import { Component, OnInit } from '@angular/core';
import {AppService} from "../shared/service/app.service";
import {UserModel} from "../shared/model/user.model";
import {BasketModel} from "../shared/model/basket.model";
import {BasketService} from "../shared/service/basket.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent implements OnInit {

  basket: BasketModel = new BasketModel();
  user: UserModel = new UserModel();

  constructor(private location: Location,
              private basketService: BasketService,
              private appService: AppService) { }

  ngOnInit() {
    this.basketService.getBasketStream().subscribe((basket : BasketModel) => {
      this.basket = basket;
    });

    this.appService.getLoggedUserStream().subscribe((user: UserModel) => {
      this.user = user;
    });
  }

  cartSummary(): number {
    return this.basketService.summary();
  }

  back() {
    this.location.back();
  }
}
