import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { HomeComponent } from "./main/home/home.component";
import { MyCartComponent } from "./main/my-cart/my-cart.component";
import { AddItemsComponent } from "./main/add-items/add-items.component";

const APP_ROUTES: Routes = [
  {
    path: '',
    component: MainComponent

  },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'myCart',
        component: MyCartComponent
      },
      {
        path: 'addItems',
        component: AddItemsComponent
      }
    ]
  }
];
export const routing = RouterModule.forRoot(APP_ROUTES);