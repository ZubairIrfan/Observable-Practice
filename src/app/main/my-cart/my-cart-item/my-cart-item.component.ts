import { Component, OnInit, Input } from '@angular/core';
import { item } from '../../../Shared/item';
import { ItemsService } from '../../../Services/items.service';

@Component({
  selector: 'app-my-cart-item',
  templateUrl: './my-cart-item.component.html',
  styleUrls: ['./my-cart-item.component.scss']
})
export class MyCartItemComponent implements OnInit {
  @Input() 
  item:item;
  constructor(private itemService:ItemsService) { }

  ngOnInit() {
  }

  removeFromCart(item){
    this.itemService.removeFromCart(item);
  }
}
