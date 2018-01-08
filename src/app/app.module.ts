import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavigationComponent } from './main/navigation/navigation.component';
import { HomeComponent } from './main/home/home.component';
import { ItemsListComponent } from './main/home/items-list/items-list.component';
import { ItemComponent } from './main/home/item/item.component';
import { ItemsService } from './Services/items.service';
import { MyCartComponent } from './main/my-cart/my-cart.component';
import { routing } from './app.routing';
import { RoutingService } from './Services/routing.service';
import { MyCartItemComponent } from './main/my-cart/my-cart-item/my-cart-item.component';
import { AddItemsComponent } from './main/add-items/add-items.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavigationComponent,
    HomeComponent,
    ItemsListComponent,
    ItemComponent,
    MyCartComponent,
    MyCartItemComponent,
    AddItemsComponent
  ],
  imports: [
    BrowserModule, 
    routing, 
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ItemsService,
    RoutingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

