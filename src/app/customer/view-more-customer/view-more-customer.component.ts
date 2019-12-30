import { Component, OnInit, Inject } from '@angular/core';
import { customer_class } from '../customer_class';
import { CustomerDataService } from '../customer-data.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-view-more-customer',
  templateUrl: './view-more-customer.component.html',
  styleUrls: ['./view-more-customer.component.css']
})
export class ViewMoreCustomerComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ViewMoreCustomerComponent>,
     private _data: CustomerDataService,
     @Inject(MAT_DIALOG_DATA) private element:customer_class) { }

  ngOnInit() {

    console.log(this.element);
  }

}
