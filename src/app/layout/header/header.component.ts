import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isOpenMenu = false;

  constructor(private router: Router) {}
  onSignUp() {
    this.router.navigate(['/signUp']);
  }
  onLogin() {
    this.router.navigate(['/login']);
  }
  ngOnInit(): void {}
}
