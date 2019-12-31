import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { product_class } from '../pruduct_class';
import { ProductDataService } from '../product-data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  constructor(private _productData: ProductDataService, private _router: Router, private _actRoutes: ActivatedRoute) { }
  temparr: product_class[];
  editProduct: FormGroup;
  ngOnInit() {
    this.editProduct = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(25), Validators.pattern('[a-zA-Z]*')]),
      price: new FormControl(null, [Validators.required, Validators.pattern('[0-9]*')]),
      stock: new FormControl(null, [Validators.required, Validators.pattern('[0-9]*')]),
      warranty: new FormControl(null, [Validators.required, Validators.pattern('[0-9]*'),]),
      mfg_date: new FormControl(null, Validators.required),
      fk_seller_email: new FormControl(localStorage.getItem('email')),
      product_id: new FormControl(this._actRoutes.snapshot.params['product_id']),

    })
    this._productData.getproductByID(this._actRoutes.snapshot.params['product_id']).subscribe(
      (data: product_class[]) => {
        this.formDataBind(data[0]);
      }
    )
  }
  onSubmit() {
    this._productData.updateproduct(this.editProduct.value).subscribe(
      (data: product_class[]) => {
        console.log(data);
        this._router.navigate(['/nav/product']);
      }
    )
  }
  formDataBind(item: product_class) {
    this.editProduct.patchValue({
      name: item.name,
      price: item.price,
      stock: item.stock,
      mfg_date: item.mfg_date,
      warranty: item.warranty
    });
  }
}
