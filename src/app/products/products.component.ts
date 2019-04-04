import { Component, OnInit } from '@angular/core';
import { Product } from '../classes/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  product: {}
  
  //   Product = {
  //   //Just test data until we get it linked
  //   id: 1,
  //   product_name: "tst",
  //   product_desc: "test prod",
  //   product_price: 12,
  //   product_image: "tst.png",
  //   created: "123",
  //   updated: "321",
  //   userId: "afd2-ff12"
  // };

  constructor(private data: ProductService) { }

  ngOnInit() {
    this.retrieveProducts();
  }

  retrieveProducts(): void{
    this.product = this.data.getProducts();
  }

}
