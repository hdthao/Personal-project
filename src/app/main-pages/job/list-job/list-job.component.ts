import { Component, OnInit } from '@angular/core';
import { Authentication } from 'src/app/authentication/authentication.service';

@Component({
  selector: 'app-listJob',
  templateUrl: './list-job.component.html',
  styleUrls: ['./list-job.component.scss'],
})
export class ListJob implements OnInit {
  showAlert: boolean;
  constructor() {}

  ngOnInit(): void {}

  changeShowAlert(data: any) {
    this.showAlert = data;
  }
}
