import { Routes, RouterModule } from "@angular/router";
import { CustomerComponent } from '../customer/customer.component';
import { AddCustomerComponent } from '../customer/add-customer/add-customer.component';
import { LoginComponent } from '../login/login.component';
import { MainMenuComponent } from './main-menu.component';
import { RoutingGardService } from './routing-gard.service';
import { UpdateCustomerComponent } from '../customer/update-customer/update-customer.component';

const arr: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'nav', canActivate: [RoutingGardService], component: MainMenuComponent, children: [
      { path: 'customer', component: CustomerComponent },
      { path: 'addCustomer', component: AddCustomerComponent },
      { path: 'updateCustomer/:email', component: UpdateCustomerComponent }

    ]
  }];
export const arr_routing = RouterModule.forRoot(arr);
