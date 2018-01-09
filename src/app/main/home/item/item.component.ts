import { Component, OnInit, Injectable } from '@angular/core';
import { Input } from '@angular/core';
import { item } from '../../../Shared/item';
import { ItemsService } from '../../../Services/items.service';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})

export class ItemComponent implements OnInit {
  @Input()  
  item:item;
  constructor(private itemService:ItemsService) {
    console.log(item);
   }

  ngOnInit() {
  }
  addItemToCart(item){
    this.itemService.addItemsToCart(item);
    alert('Item Successfully Added to Cart');
    // this.snackBar.openFromComponent(ItemComponent, {
    //   duration: 500,
    // });
  }
} 
