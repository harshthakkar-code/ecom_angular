import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { customer_class } from './customer_class';
import { CustomerDataService } from './customer-data.service';
import { Router } from '@angular/router';
import { ViewMoreCustomerComponent } from './view-more-customer/view-more-customer.component';
import { product_class } from '../product/pruduct_class';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  displayedColumns: string[] = ['email', 'name', 'phone_no', 'address', 'pincode', 'state', 'action'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  dataSource = new MatTableDataSource();

  customer_arr: customer_class[] = [];
  flag: boolean = false;
  temparr: customer_class[];
  constructor(private _data: CustomerDataService, public _dialog: MatDialog, private _router: Router) {
    this.dataSource = new MatTableDataSource();
  }
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this._data.getAllcustomer().subscribe(
      (data: customer_class[]) => {
        this.customer_arr = data;
        this.dataSource.data = this.customer_arr;
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
  deleteCustomer(row) {
    if (confirm("Are you sure?")) {
      this._data.deletecustomer(row.customer_id).subscribe(
        (data: product_class[]) => {
          this.temparr.splice(this.temparr.indexOf(row), 1);
          this.dataSource.data = this.temparr;

        }
      );
    }

  }
  viewmore(element) {
    this._dialog.open(ViewMoreCustomerComponent, {
      data: element
    })
  }
  addcustomer() {
    this._router.navigate(['/nav/addCustomer']);
  }
  updatecustomer(row) {

    this._router.navigate(['/nav/updateCustomer', row.email]);
  }
}
