import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-header',
  templateUrl: './detail-header.component.html',
  styleUrls: ['./detail-header.component.css']
})
export class DetailHeaderComponent implements OnInit {
  isShow = false;
  isSwitch = false;
  constructor(private router: Router) {}
  ngOnInit(): void {}
  showDropdown() {
    this.isShow = !this.isShow;
  }
  outSide(e: any) {
    this.isShow = false;
  }
  onSwitch() {
    this.isSwitch = !this.isSwitch;
  }
  gotoPost() {
    this.router.navigate(['/post']);
  }
  gotoFind() {
    this.router.navigate(['/details']);
  }

}
