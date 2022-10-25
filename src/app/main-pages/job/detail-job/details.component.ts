import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  showAlert: boolean;
  constructor() {}

  ngOnInit(): void {}

  changeShowAlert(data: any) {
    this.showAlert = data;
  }
}
