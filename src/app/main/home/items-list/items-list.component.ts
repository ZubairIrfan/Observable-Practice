import { Component, OnInit, Input } from '@angular/core';
import { item } from '../../../Shared/item';
import { ItemsService } from '../../../Services/items.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {
  itemsList:item[];
  constructor(private itemsService:ItemsService) { 

  }

  ngOnInit() {
    this.itemsService.itemsObservable$.subscribe((res)=>{
      this.itemsList = res;
        },(err)=>{
  
      });
      this.itemsService.categoryObservable$.subscribe((res)=>{
         console.log("itemlist",res);
         this.itemsList = res;
         //console.log(this.itemsList.filter(item => item.category == res));
        // if(res!='All')
        //  this.itemsList = this.itemsList.filter(item => {
        //    item.category == res;
        //    console.log("item.category ", item.category, "res ", res);
        //  });
        },(err)=>{

          });
  }

}
