import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserSevices } from 'src/app/core/model-user/user.service';

@Component({
  selector: 'app-detail-header',
  templateUrl: './detail-header.component.html',
  styleUrls: ['./detail-header.component.scss'],
})
export class DetailHeaderComponent implements OnInit {
  isShowDropdown = false;
  @Input() showAlert = false;
  isShowProfile = false;
  @Input() isSwitch = false;
  @Output() changeShowAlert = new EventEmitter();
  role: any = '';

  constructor(private router: Router, private userService: UserSevices) {}

  ngOnInit(): void {
    this.getRole();
  }

  showDropdown() {
    this.isShowDropdown = !this.isShowDropdown;
  }

  showProfile() {
    this.isShowProfile = !this.isShowProfile;
  }

  outSide(e: any) {
    this.isShowDropdown = false;
  }

  onSwitch() {
    this.showAlert = true;
    this.changeShowAlert.emit(this.showAlert);
    setTimeout(() => {
      this.showAlert = false;
      this.changeShowAlert.emit(this.showAlert);
    }, 1500);
    this.isSwitch = !this.isSwitch;
    this.userService.switchRole('').subscribe((data) => {
      if (this.isSwitch === true) {
        localStorage.setItem('userRole', 'EMPLOYER');
        this.role = localStorage.getItem('userRole');
      } else {
        localStorage.setItem('userRole', 'WORKER');
        this.role = localStorage.getItem('userRole');
        setTimeout(() => {
          this.router.navigate(['/list-job']);
        }, 1500);
      }
    });
  }

  gotoPost() {
    this.router.navigate(['/post']);
  }

  gotoFind() {
    this.router.navigate(['/list-job']);
  }

  getRole() {
    if (localStorage.getItem('userRole') !== null) {
      let role = localStorage.getItem('userRole');
      if (role === 'EMPLOYER') {
        this.isSwitch = true;
      } else {
        this.isSwitch = false;
      }
    }
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
