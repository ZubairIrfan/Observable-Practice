import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../Services/items.service';
import { item } from '../Shared/item';
import { Router,  ActivatedRoute } from '@angular/router';
import { RoutingService } from '../Services/routing.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  route;
  constructor(private itemService:ItemsService,private router: Router, private activatedRoute:ActivatedRoute,private routingService :RoutingService) { 
    itemService.addItem(new item(ItemsService.id,'Samsung Galaxy S7',12,'http://www.samsung.com/global/galaxy/galaxy-s7/images/galaxy-s7-edge_gallery_front_black_s3.png','Samsung Galaxy S7 Android smartphone. Announced Feb 2016. Features 5.1″ Super AMOLED display, Exynos 8890 Octa chipset, 12 MP primary camera, 5 MP front camera, 3000 mAh battery, 64 GB storage, 4 GB RAM, IP68 certified, Corning Gorilla Glass 4.','Mobiles','Rs 30000'));
    itemService.addItem(new item(ItemsService.id,'Dell Lattitude E5430',10,'http://www.atlanticit.ie/wp-content/uploads/2016/10/e542012-180x180.png','The Latitude E5430Best Price at Amazon looks every bit the old-school mainstream business system, with a dark grey surface bisected by a silver bezel around the chassis. It looks kind of bulky next to ultrabooks, at 10 inches 14 by 1.28 inches (HWD). There is a reason why it is so thick: This system still has plenty of old-school internal expansion slots, I/O ports, and a DVD drive. The DVD drive will be important to you if you still have a large archive of information on DVD.','Laptops','Rs 24000'));
    itemService.addItem(new item(ItemsService.id,'Samsung Galaxy S8',23,'https://thegoodguys.sirv.com/products/50047401/50047401_502941.PNG?scale.height=505&scale.width=773&canvas.height=505&canvas.width=773&canvas.opacity=0&format=png&png.optimize=true','Samsung Galaxy S7 Android smartphone. Announced Feb 2016. Features 5.1″ Super AMOLED display, Exynos 8890 Octa chipset, 12 MP primary camera, 5 MP front camera, 3000 mAh battery, 64 GB storage, 4 GB RAM, IP68 certified, Corning Gorilla Glass 4.','Mobiles','Rs 60000'));
    itemService.addItem(new item(ItemsService.id,'Lenovo A6000',7,'http://www.mac.net.pk//upload/images/Smartphones/Lenovo/A%20Series/Lenovo%20A6000/Product/lenovo-smartphone-a6000-front-back-list.png','Stylish Brand Lenovo reveals elegant A6000 smartphone at an attractive price in Pakistan with a bright 5.0 inch display and protected from moisture by a special nano-coating. Lenovo A6000 is equipped with an incredibly powerful battery that will become your faithful companion in the exciting world of adventure and entertainment. Lenovo A6000 black has a soft type of body with rounded edges which is really nice to feel in hands and to play with. Additionally Lenovo A6000s responsive touch screen allows you to comfortably control the device with just one hand and it does not matter if you are wearing gloves. 5 inch display of Lenovo handset A6000 with IPS-matrix ensures a colorful and clear images from any angle. ','Mobiles','Rs 20000'));
    itemService.addItem(new item(ItemsService.id,'HP Slate 7',25,'http://tabletmonkeys.com/images/2014/09/HP-Slate-7-VoiceTab-Ultra.png','HP Slate 7 Voice Tab tablet was launched in February 2014. The tablet comes with a 7.00-inch display with a resolution of 1200 pixels by 800 pixels. The HP Slate 7 Voice Tab is powered by 1.2GHz processor and it comes with 1GB of RAM. The tablet packs 16GB of internal storage that can be expanded up to 32GB via a microSD card. As far as the cameras are concerned, the HP Slate 7 Voice Tab packs a 5-megapixel primary camera on the rear and a 2-megapixel front shooter for selfies.The HP Slate 7 Voice Tab runs Android 4.2 and is powered by a 4100mAh non removable battery. It measures 115.40 x 189.00 x 9.50 (height x width x thickness) and weigh 325.00 grams.','Tablets','Rs 52500'));
    this.router.navigate(['/home']);
    this.routingService.setUrl(this.activatedRoute);
  }

  ngOnInit() {
    this.routingService.routingObservable$.subscribe((res)=>{
    this.route = res;
    console.log(res);
    })
  }

}
