import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../Services/items.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  selectedCategory = 'All';
  constructor(private itemService:ItemsService) { }

  ngOnInit() {
  }

  switchCategory(category) {
    this.selectedCategory = category;
    this.itemService.switchCategory(category);
  }
}
