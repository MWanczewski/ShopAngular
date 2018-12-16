import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AdminPanelComponent} from "./admin-panel/admin-panel.component";
import {ProductsComponent} from "./admin-panel/products/products.component";
import {ProductCategoriesComponent} from "./admin-panel/product-categories/product-categories.component";
import {EditProductCategoryComponent} from "./admin-panel/edit-product-category/edit-product-category.component";
import {EditProductComponent} from "./admin-panel/edit-product/edit-product.component";
import {OrdersComponent} from "./admin-panel/orders/orders.component";
import {WarehouseComponent} from "./admin-panel/warehouse/warehouse.component";
import {ProductCategoriesResolve, ProductCategoryResolve} from "./shared/resolve/product-category.resolve";
import {ProductResolve, ProductsResolve} from "./shared/resolve/product.resolve";
import {WarehouseResolve, WarehousesResolve} from "./shared/resolve/warehause.resolve";
import {EditWarehouseComponent} from "./admin-panel/edit-warehouse/edit-warehouse.component";
import {LoginComponent} from "./login/login.component";
import {AdminGuard} from "./shared/guard/admin.guard";
import {GuestGuard} from "./shared/guard/guest.guard";
import {BasketsComponent} from "./baskets/baskets.component";
import {NewOrderComponent} from "./new-order/new-order.component";
import {LoginGuard} from "./shared/guard/login.guard";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },


  {
    path: 'basket',
    component: BasketsComponent
  },


  {
    path: 'new-order',
    component: NewOrderComponent,
    canActivate: [LoginGuard]
  },

  {
    path: "login",
    component: LoginComponent,
    canActivate: [GuestGuard]
  },


  {
    path: 'admin-panel',
    component: AdminPanelComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        redirectTo: 'products',
        pathMatch: 'prefix'
      },
      {
        path: 'orders',
        component: OrdersComponent
      },
      {
        path: 'warehouse',
        component: WarehouseComponent,
        resolve: {
          warehouses: WarehousesResolve
        }
      },
      {
        path: 'warehouse/add',
        component: EditWarehouseComponent,
        resolve: {
          products: ProductsResolve
        }
      },
      {
        path: 'warehouse/edit/:id',
        component: EditWarehouseComponent,
        resolve: {
          product: ProductsResolve,
          warehouse: WarehouseResolve
        }
      },

      {
        path: 'products',
        component: ProductsComponent,
        resolve: {
          products: ProductsResolve
        }
      },
      {
        path: 'products/add',
        component: EditProductComponent,
        resolve: {
          productCategories: ProductCategoriesResolve
        }
      },

      {
        path: 'products/edit/:id',
        component: EditProductComponent,
        resolve: {
          product: ProductResolve,
          productCategories: ProductCategoriesResolve
        }
      },


      {
        path: 'product-categories',
        component: ProductCategoriesComponent,
        resolve: {
          productCategories: ProductCategoriesResolve
        }
      },
      {
        path: 'product-categories/add',
        component: EditProductCategoryComponent
      },
      {
        path: 'product-categories/edit/:id',
        component: EditProductCategoryComponent,
        resolve: {
          productCategory: ProductCategoryResolve
        }
      },

      {
        path: '**',
        redirectTo: 'products',
        pathMatch: 'prefix'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
