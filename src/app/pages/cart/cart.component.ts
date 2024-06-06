import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  productsArr: any[];
  searchTerm: string;
  displayedColumns: string[] = ['name', 'weight', 'symbol'];
  constructor() {
    this.searchTerm = "";
    this.productsArr = [
      { productId: 101, productName: "Apple Macbook", price: 220000, quantity: 12, imgUrl: "./assets/appleMacbook.jpg", desc: "Apple mac book pro 13 inch grey color 1tb" },
      { productId: 102, productName: "Asus Laptop", price: 135000, quantity: 1, imgUrl: "./assets/asus.jpg", desc: "Asus laptop 500gb Intel Core I7" },
      { productId: 103, productName: "Dell Latitude", price: 170000, quantity: 5, imgUrl: "./assets/dellLatitude.jpg", desc: "Dell Latitude 2 in 1, Intel I9 Convertible Laptop" },
      { productId: 104, productName: "HP Laptop", price: 140000, quantity: 7, imgUrl: "./assets/hp.jpg", desc: "Hp Laptop, Active pen support, Intel Core I7 500gb" },
      { productId: 105, productName: "Lenovo Air", price: 120000, quantity: 9, imgUrl: "./assets/lenovo.jpg", desc: "Lenovo 2 in 1 Convertible Intel Core I9 8th gen" }
    ]
  }
  searchEventHandler() {

  }
  searchTermEventHandler(searchTextBox: any) {
    console.log("Key pressed", searchTextBox.value);
    this.searchTerm = searchTextBox.value;

  }
}
