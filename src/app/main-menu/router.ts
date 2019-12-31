import { Routes, RouterModule } from "@angular/router";
import { CustomerComponent } from '../customer/customer.component';
import { AddCustomerComponent } from '../customer/add-customer/add-customer.component';
import { LoginComponent } from '../login/login.component';
import { MainMenuComponent } from './main-menu.component';
import { RoutingGardService } from './routing-gard.service';
import { UpdateCustomerComponent } from '../customer/update-customer/update-customer.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { ProductComponent } from '../product/product.component';
import { AddProductComponent } from '../product/add-product/add-product.component';
import { EditProductComponent } from '../product/edit-product/edit-product.component';

const arr: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'nav', canActivate: [RoutingGardService], component: MainMenuComponent, children: [
      { path: 'customer', component: CustomerComponent },
      { path: 'addCustomer', component: AddCustomerComponent },
      { path: 'updateCustomer/:email', component: UpdateCustomerComponent },
      { path: 'product', component: ProductComponent },
      { path: 'addproduct', component: AddProductComponent },
      { path: 'updateproduct/:product_id', component:EditProductComponent }

    ]
  },
  { path: '**', component: PageNotFoundComponent }];
export const arr_routing = RouterModule.forRoot(arr);
