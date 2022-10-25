import { Component, OnInit, Input, Output,  EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit {
  @Input() switchStep = false;
  @Output() changStep = new EventEmitter();

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  back() {
    this.changStep.emit(this.switchStep);
  }
}
