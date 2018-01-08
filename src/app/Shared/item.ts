export class item{
  id:number;
  name:string;
  quantity:number;
  imagePath:string;
  description:string;
  category:string;
  price: string;
  available:boolean;
  
  constructor(id,n,q,i,d,c,p){
    this.id = id;
this.name = n;
this.quantity = q;
this.imagePath = i;
this.description = d;
this.category = c;
this.price = p;
this.available = true;
  }
  
}