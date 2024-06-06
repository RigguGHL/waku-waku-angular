import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-product-sell',
  templateUrl: './product-sell.component.html',
  styleUrls: ['./product-sell.component.scss']
})
export class ProductSellComponent {
  private orgProducts: Product[] = [];
  products: Product[] = [];

  constructor(public firestore: FirestoreService) {
    this.readProducts();
  }

  async readProducts() {
    this.orgProducts = (await this.firestore.getProducts()).map((product: Product) => ({ ...product, selectedProducts: 0 }));
    console.log(this.orgProducts)
    this.products = this.orgProducts;
  }

  addItem(product: Product) {
    if (product.selectedProducts! < product.stock)
      product.selectedProducts!++;
  }

  removeItem(product: Product) {
    if (product.selectedProducts! > 0)
      product.selectedProducts!--;
  }

  addToCart(product: Product) {
    //emit to cart
  }

  searchProduct(searchInput: string) {
    this.products = this.orgProducts.filter((product: Product) => {
      return product.name.toLowerCase().includes(searchInput.toLowerCase())
    })
  }
}
