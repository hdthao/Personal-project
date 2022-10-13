import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-pw',
  templateUrl: './forgot-pw.component.html',
  styleUrls: ['./forgot-pw.component.css']
})
export class ForgotPwComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  backToLogin() {
    this.router.navigate(['/login']);
  }
}
