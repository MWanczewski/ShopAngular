import {Injectable} from "@angular/core";
import {BasketModel} from "../model/basket.model";
import {Observable, Subject} from "rxjs";
import {BasketItemModel} from "../model/basket-item.model";
import {startWith} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export  class BasketService {
  private basket: BasketModel = new BasketModel();
  private basketStream: Subject<BasketModel> = new Subject();

  constructor() { }

  public addItem(newItem: BasketItemModel) {
    this.basket.addItem(newItem);
    localStorage.setItem('basket', JSON.stringify(this.basket));
    this.basketStream.next(this.basket);
  }
  public removeItem(warehouseId: number) {
    this.basket.removeItem(warehouseId);
    localStorage.setItem('basket', JSON.stringify(this.basket));
    this.basketStream.next(this.basket);
  }
  public containsItem(warehouseId: number): boolean {
    return this.basket.containsItem(warehouseId);
  }
  public getBasketStream(): Observable<BasketModel> {
    return this.basketStream.asObservable().pipe(startWith(this.basket));
  }
  public updateBasket(basket: BasketModel) {
    this.basket.initBasket(basket);
    localStorage.setItem('basket', JSON.stringify(this.basket));
    this.basketStream.next(this.basket);
  }
  public clearBasket() {
    this.basket.clearBasket();
    localStorage.setItem('basket', JSON.stringify(this.basket));
    this.basketStream.next(this.basket);
  }
  public summary(): number {
    return this.basket.summary()
  }
  public getBasketInfo() {
    let tempBasket = localStorage.getItem('basket');
    if(tempBasket) {
      this.basket.initBasket(JSON.parse(tempBasket));
      this.basketStream.next(this.basket);
    }
  }
}
