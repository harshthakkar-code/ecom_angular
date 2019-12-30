import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, MaxLengthValidator } from '@angular/forms';
import { CustomerDataService } from '../customer-data.service';
import { customer_class } from '../customer_class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  temparr: customer_class[];


  constructor(private _customerData: CustomerDataService, private _router: Router) { }
  addCustomer: FormGroup;
  ngOnInit() {
    this.addCustomer = new FormGroup({
      customer_email: new FormControl(null, [Validators.required, Validators.email]),
      name: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(25), Validators.pattern('[a-zA-Z]*')]),
      password_group: new FormGroup({
        password: new FormControl(null),
        conform_password: new FormControl(null)
      }, [this.password_check.bind(this)]),
      phone_no: new FormControl(null, [Validators.required, Validators.pattern('[0-9]*'), Validators.maxLength(10)]),
      address: new FormControl(null, [Validators.required]),
      pincode: new FormControl(null, [Validators.required, Validators.pattern('[0-9]*'), Validators.maxLength(6)]),
      state: new FormControl(null,[ Validators.required])

    });
  }

  onSubmit() {
    let data = {
      email: this.addCustomer.value.customer_email,
      name: this.addCustomer.value.name,
      password: this.addCustomer.value.password_group.password,
      phone_no: this.addCustomer.value.phone_no,
      address: this.addCustomer.value.address,
      pincode: this.addCustomer.value.pincode,
      state: this.addCustomer.value.state

    }

    this._customerData.addcustomer(data).subscribe(

      (data: customer_class) => {
        this._router.navigate(['/nav/customer']);
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
}
