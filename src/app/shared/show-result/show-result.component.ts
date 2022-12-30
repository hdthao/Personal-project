import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-result',
  templateUrl: './show-result.component.html',
  styleUrls: ['./show-result.component.scss'],
})
export class ShowResultComponent implements OnInit {
  @Input() listCountry: any[] = [];
  @Input() listTargetZone: string = '';
  @Input() category: string = '';
  @Input() subCategory: string = '';

  constructor( private router: Router) {}

  ngOnInit(): void {}

  clear() {
    this.listCountry.splice(0);
    this.listTargetZone = '';
    this.category = '';
    this.subCategory = '';
    window.location.reload();
  }
}
