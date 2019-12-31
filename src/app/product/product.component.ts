import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { ProductDataService } from './product-data.service';
import { product_class } from './pruduct_class';
import { customer_class } from '../customer/customer_class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private _data: ProductDataService, public _dialog: MatDialog, private _router: Router) { }
  product_arr: product_class[] = [];
  temparr: product_class[] = [];
  displayedColumns: string[] = ['name', 'price', 'stock', 'mfg_date', 'warranty', 'action'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  dataSource = new MatTableDataSource();
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this._data.getAllproduct().subscribe(
      (data: product_class[]) => {

        this.product_arr = data;
        this.dataSource.data = this.product_arr;
        console.log(this.dataSource.data);
        this.temparr = data;
      }
    );
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }

  }
  deleteProduct(element) {
    // console.log(element.product_id);
    if (confirm("Are you sure?")) {
      this._data.deleteproduct(element.product_id).subscribe(
        (data: product_class[]) => {
          this.temparr.splice(this.temparr.indexOf(element), 1);
          this.dataSource.data = this.temparr;
        }
      )
    }
  }
  updateProduct(element) {
    this._router.navigate(['/nav/updateproduct', element.product_id]);

  }
  addProduct() {
    this._router.navigate(['/nav/addproduct']);

  }
}
