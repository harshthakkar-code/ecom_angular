import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  customer_email: string = '';
  constructor(private breakpointObserver: BreakpointObserver, private _router: Router) { }

  ngOnInit() {
    this.customer_email = localStorage.getItem('customer_email');
  }
  onLogout() {
    localStorage.clear();
    this._router.navigate(['']);

  }
}
