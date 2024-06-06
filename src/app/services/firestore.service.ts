import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, getDocs, query } from '@angular/fire/firestore';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(public firestore: Firestore) { }

  async addProduct(product: Product) {
    return await addDoc(collection(this.firestore, 'products'), product);
  }

  async getProducts(): Promise<Product[]> {
    return (
      await getDocs(query(collection(this.firestore, 'products')))
    ).docs.map((products) => products.data() as Product);
  }
}
