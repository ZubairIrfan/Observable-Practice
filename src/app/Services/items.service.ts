import { Injectable } from '@angular/core';
import { item } from '../Shared/item';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ItemsService {
  item:item[] =[];
  myCart:item[] = [];
  static id:number = 0;
private itemsSubject = new BehaviorSubject(this.item);
private myCartSubject = new BehaviorSubject(this.myCart);
private categorySubject = new BehaviorSubject(this.itemsSubject.getValue());
itemsObservable$ = this.itemsSubject.asObservable();
myCartObservable$ = this.myCartSubject.asObservable();
categoryObservable$ = this.categorySubject.asObservable();

  constructor() { 
   
  }
 
  addItem(item){
    console.log(item);
    this.itemsSubject.getValue().push(item);
   // this.items.push(item);
    console.log(this.itemsSubject.getValue());
    ItemsService.id++;
    this.itemsSubject.next(this.itemsSubject.getValue());
  }
addItemsToCart(item){
  //decrementing quantity
  let itemlist = this.itemsSubject.getValue();
  for(let i =0; i< itemlist.length; i++){
    if(itemlist[i].id == item.id){
      if(itemlist[i].available){
      itemlist[i].quantity--;
      }
      if(itemlist[i].quantity==0)
      itemlist[i].available = false;
    }
  }
  this.itemsSubject.next(itemlist);
  
  let mycart =  this.myCartSubject.getValue();
  let check = false;
  for(let j=0; j < mycart.length; j++){
    if(mycart[j].id == item.id){
      mycart[j].quantity++;
      check = true;
      break;
    }
  }
  if(check){
    this.myCartSubject.next(mycart);
  }
  else
  {
 let x = Object.assign({},item);
 x.quantity =1;
    this.myCartSubject.getValue().push(x);
    this.myCartSubject.next(this.myCartSubject.getValue());
  }
  

}
switchCategory(category){
  if(category!='All'){
    this.categorySubject.next((this.itemsSubject.getValue()).filter(item => item.category == category));
  }else{
    this.categorySubject.next(this.itemsSubject.getValue());
  }
}
removeFromCart(item){
  let x = this.myCartSubject.getValue().filter(items=> item.id != items.id);
  this.myCartSubject.next(x);
}
}
