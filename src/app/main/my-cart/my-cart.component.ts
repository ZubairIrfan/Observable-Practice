import { Component, OnInit } from '@angular/core';
import { item } from '../../Shared/item';
import { ItemsService } from '../../Services/items.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.scss']
})
export class MyCartComponent implements OnInit {
  myCart: item[] = [];
  totalItemsCount: number=0;
  totalPrice: number=0;
  constructor(private itemsService: ItemsService) {
    this.itemsService.myCartObservable$.subscribe((res) => {
      this.totalItemsCount = res.length;
      for(var i=0; i< res.length; i++){
        let arr:any[] = res[i].price.split(' ');
        this.totalPrice += (res[i].quantity * arr[1]);
      }
    })
  }

  ngOnInit() {
    this.itemsService.myCartObservable$.subscribe((res) => {
      this.myCart = res;
    }, (err) => {

    })
  }

}
