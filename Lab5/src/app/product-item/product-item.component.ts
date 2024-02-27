import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../products';
import { products } from '../products';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product!: Product;
  currentImageIndex = 0;
  @Output() deleteRequest = new EventEmitter<Product>();


  share(productLink: string) {
    const tgLink = `https://t.me/share/url?url=${encodeURIComponent(productLink)}`;
    window.location.href = tgLink;
  }

  changeImage(change: number) {
    let imagesLength = this.product.img.length;
    this.currentImageIndex += change;
    if (this.currentImageIndex < 0) {
      this.currentImageIndex = imagesLength - 1;
    } else if (this.currentImageIndex >= imagesLength) {
      this.currentImageIndex = 0;
    }
  }

  like(){
    this.product.likes++;
  }

  delete(product: Product){
    this.deleteRequest.emit(product);
  }
}
