import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  currentImageIndex: {[key: number]: number} = {};
  products = [...products];

  ngOnInit(): void {
    // Инициализация индексов изображений
    this.products.forEach((product, index) => {
      this.currentImageIndex[index] = 0; // Устанавливаем индекс первой картинки для каждого продукта
    });
  }

  share(productLink: string) {
    const tgLink = `https://t.me/share/url?url=${encodeURIComponent(productLink)}`;
    window.location.href = tgLink;
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  changeImage(productIndex: number, change: number) {
    let imagesLength = this.products[productIndex].img.length;
    if (!this.currentImageIndex[productIndex]) {
      this.currentImageIndex[productIndex] = 0;
    }
    this.currentImageIndex[productIndex] += change;
    if (this.currentImageIndex[productIndex] < 0) {
      this.currentImageIndex[productIndex] = imagesLength - 1;
    } else if (this.currentImageIndex[productIndex] >= imagesLength) {
      this.currentImageIndex[productIndex] = 0;
    }
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/