import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../Services/items.service';
import { Router , ActivatedRoute } from '@angular/router';
import { RoutingService } from '../../Services/routing.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  myCartCount:number;
  totalItemsCount:number;
  constructor(private itemService: ItemsService, private router:Router, private routingService:RoutingService,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.itemService.itemsObservable$.subscribe((res)=>{
      this.totalItemsCount = res.length;
      
    });
    this.itemService.myCartObservable$.subscribe((res)=>{
      this.myCartCount = res.length;
    });
  }

  navigateTo(index){
    if(index==0){
    this.router.navigate(['/home']);
    this.routingService.setUrl(this.activatedRoute);
    }
    else if(index==1){
      this.router.navigate(['/myCart']);
      this.routingService.setUrl(this.activatedRoute);
    }
    else if(index==2){
      this.router.navigate(['/addItems']);
      this.routingService.setUrl(this.activatedRoute);
    }
  }
}
