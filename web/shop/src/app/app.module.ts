import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import {AppRoutingModule} from "./app-routing.module";
import { MainComponent } from './layout/main/main.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SharedModule} from "./shared/shared.module";
import { ContentComponent } from './layout/content/content.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { HomeComponent } from './home/home.component';
import { ProductCategoriesComponent } from './admin-panel/product-categories/product-categories.component';
import { ProductsComponent } from './admin-panel/products/products.component';
import { EditProductCategoryComponent } from './admin-panel/edit-product-category/edit-product-category.component';
import { EditProductComponent } from './admin-panel/edit-product/edit-product.component';
import { OrdersComponent } from './admin-panel/orders/orders.component';
import { WarehouseComponent } from './admin-panel/warehouse/warehouse.component';
import {ProductCategoryService} from "./shared/service/product-category.service";
import {ProductCategoriesResolve, ProductCategoryResolve} from "./shared/resolve/product-category.resolve";
import {ProductResolve, ProductsResolve} from "./shared/resolve/product.resolve";
import {ProductService} from "./shared/service/product.service";
import { EditWarehouseComponent } from './admin-panel/edit-warehouse/edit-warehouse.component';
import {WarehouseService} from "./shared/service/warehouse.service";
import {WarehouseResolve, WarehousesResolve} from "./shared/resolve/warehause.resolve";
import { BasketsComponent } from './baskets/baskets.component';
import { LoginComponent } from './login/login.component';
import { NewOrderComponent } from './new-order/new-order.component';
import {BasketService} from "./shared/service/basket.service";
import {AppService} from "./shared/service/app.service";
import {UserModel} from "./shared/model/user.model";
import {GuestGuard} from "./shared/guard/guest.guard";
import {LoginGuard} from "./shared/guard/login.guard";
import {AdminGuard} from "./shared/guard/admin.guard";
import {AuthService} from "./shared/service/auth.service";


export function initLoggedUserFactory(appService: AppService, cartService: BasketService) {
  return () => {
    cartService.getBasketInfo();
    appService.getLoggedUserInfo().subscribe((loggedUser: UserModel) => {
      return loggedUser;
    });
  }
}


@NgModule({
  declarations: [
    MainComponent,
    ContentComponent,
    AdminPanelComponent,
    HomeComponent,
    ProductCategoriesComponent,
    ProductsComponent,
    EditProductCategoryComponent,
    EditProductComponent,
    OrdersComponent,
    WarehouseComponent,
    EditWarehouseComponent,
    BasketsComponent,
    LoginComponent,
    NewOrderComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initLoggedUserFactory,
      deps: [AppService, BasketService],
      multi: true
    },
    GuestGuard,
    LoginGuard,
    AdminGuard,
    AuthService,
    AppService,
    BasketService,
    ProductCategoryService,
    ProductCategoriesResolve,
    ProductCategoryResolve,
    ProductService,
    ProductResolve,
    ProductsResolve,
    WarehouseService,
    WarehousesResolve,
    WarehouseResolve
  ],
  bootstrap: [MainComponent]
})
export class AppModule { }
