import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../product-data.service';
import { Router } from '@angular/router';
import { product_class } from '../pruduct_class';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private _productData: ProductDataService, private _router: Router) { }
  temparr: product_class[];
  addproduct: FormGroup;
  ngOnInit() {
    this.addproduct = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(25), Validators.pattern('[a-zA-Z]*')]),
      price: new FormControl(null, [Validators.required, Validators.pattern('[0-9]*')]),
      stock: new FormControl(null, [Validators.required, Validators.pattern('[0-9]*')]),
      warranty: new FormControl(null, [Validators.required, Validators.pattern('[0-9]*'),]),
      mfg_date: new FormControl(null),
      fk_seller_email: new FormControl(localStorage.getItem('email')),

    })

  }
  onSubmit() {
    this._productData.addproduct(this.addproduct.value).subscribe(
      (data: product_class[]) => {
        console.log(localStorage.getItem('email'));
        console.log(data);
        this._router.navigate(['/nav/product']);
      }
    )
  }

}
