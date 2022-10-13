import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-details',
  templateUrl: './header-details.component.html',
  styleUrls: ['./header-details.component.css'],
})
export class HeaderDetailsComponent implements OnInit {
  constructor(private router: Router) {}
  isShow = false;
  isSwitch = false;
  ngOnInit(): void {}
  showDropdown() {
    this.isShow = !this.isShow;
  }
  outSide(e :any) {
    this.isShow = false;
  }
  onSwitch() {
    this.isSwitch = !this.isSwitch;
    console.log(this.isSwitch)
  }
  gotoPost() {
    this.router.navigate(['/post'])
  }
  gotoFind() {
    this.router.navigate(['/details'])
  }
}
