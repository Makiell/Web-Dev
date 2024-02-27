import { Component, OnInit } from '@angular/core';

import { products, Product } from '../products';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = [...products];

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const categoryName = params.get('categoryName');
      if (categoryName) {
        this.products = products.filter(product => product.categoryName === categoryName);
      } else {
        this.products = products;
      }
    });
  }

  onDeleteProduct(productDelete: Product) {
    console.log(this.products);
    
    // Удалить продукт из массива
    // this.products.splice(productId, 1);
    const index = this.products.findIndex(product => product === productDelete);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
    // this.products = this.products.splice(index-1, 1);
    console.log(this.products);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/