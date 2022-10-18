import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-step1',
  templateUrl: './post-step1.component.html',
  styleUrls: ['./post-step1.component.scss']
})
export class PostStep1Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  nextStep() {
    this.router.navigate(['/post/step2'])
  }
}
