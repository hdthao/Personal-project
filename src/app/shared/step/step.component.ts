import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }
  onBack() {
    this.router.navigate(['/post'])
  }
}
