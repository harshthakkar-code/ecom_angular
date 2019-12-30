import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { CustomerDataService } from '../customer-data.service';
import { customer_class } from '../customer_class';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  constructor(private _data: CustomerDataService, private _actRoutes: ActivatedRoute, private _route: Router) { }
  updateCustomer: FormGroup;

  ngOnInit() {
    this.updateCustomer = new FormGroup({
      customer_email: new FormControl(null, [Validators.required, Validators.email]),
      name: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(25), Validators.pattern('[a-zA-Z]*')]),

      password: new FormControl(null),
      // conform_password: new FormControl(null),

      phone_no: new FormControl(null, [Validators.required, Validators.pattern('[0-9]*'), Validators.maxLength(10)]),
      address: new FormControl(null, [Validators.required]),
      pincode: new FormControl(null, [Validators.required, Validators.pattern('[0-9]*'), Validators.maxLength(6)]),
      state: new FormControl(null, [Validators.required])


    });
    this._data.getcustomerByEmail(this._actRoutes.snapshot.params['email']).subscribe(
      (data: customer_class[]) => {
        console.log(data);
        this.formDataBind(data[0]);
      }
    )
  }
  password_check(c: AbstractControl): { [s: string]: boolean } {
    const pass = c.get('password').value;
    const cpass = c.get('conform_password').value;
    if (pass != cpass) {

      return { 'sarkhanathi': true };
    }
    return null;
  }

  formDataBind(item: customer_class) {
    this.updateCustomer.patchValue({
      customer_email: item.email,
      name: item.name,
      phone_no: item.phone_no,
      password: item.password,
      address: item.address,
      pincode: item.pincode,
      state: item.state
    });
  }
  onSubmit() {


    this._data.updatecustomer(this.updateCustomer.value).subscribe(
      (data: customer_class) => {
        console.log(data);
        this._route.navigate(['/nav/customer']);
      }
    );
  }
}
