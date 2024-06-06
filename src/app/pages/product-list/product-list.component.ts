import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EditProductComponent } from 'src/app/components/edit-product/edit-product.component';
import { Product } from 'src/app/interfaces/product';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  displayedColumns: string[] = ['name', 'character', 'stock', 'cost', 'price', 'actions'];
  dataSource!: MatTableDataSource<Product>;
  private orgProducts: Product[] = [];
  products: Product[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public firestore: FirestoreService, public dialog: MatDialog) {
    this.readProducts();
  }

  openDialog() {
    const dialogRef = this.dialog.open(EditProductComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  async readProducts() {
    this.orgProducts = (await this.firestore.getProducts()).map((product: Product) => ({ ...product, selectedProducts: 0 }));
    console.log(this.orgProducts)
    this.products = this.orgProducts;
    this.dataSource = new MatTableDataSource(this.orgProducts);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log(this.sort)
  }

  searchProduct(searchInput: string) {
    this.dataSource.filter = searchInput.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
