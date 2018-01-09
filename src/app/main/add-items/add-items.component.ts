import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../Services/items.service';
import { item } from '../../Shared/item';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.scss']
})
export class AddItemsComponent implements OnInit {
numbers:any[] =[];
categories:any[]= ['Mobiles','Laptops','Tablets','Accessories']
item:any={
};
  constructor(private itemService: ItemsService) {
    this.numbers = Array(50).fill(0);
   }

  ngOnInit() {
  }
  addItemToList(){
     this.itemService.addItem(new item(ItemsService.id,this.item.name,this.item.quantity,this.item.imagePath,this.item.description,this.item.category,this.item.price));
     alert('Item Successfully Added to Cart');
    this.item={};
    }
}
