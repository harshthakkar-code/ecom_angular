import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutingGardService implements CanActivate {

  constructor(private _router: Router) { }
  canActivate(_active: ActivatedRouteSnapshot, _state: RouterStateSnapshot): boolean {

    if (localStorage.getItem('customer_email') != null) {
      return true;
    }

    alert('login first');
    this._router.navigate(['/']);
    return false;

  }
}
