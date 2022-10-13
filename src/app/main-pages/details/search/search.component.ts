import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  isToggle = false;
  showJob = true;
  showCategory = true;
  showSubCategory = true;
  showPayment = true;
  showLocation = true;
  showEmp = true;
  toggle() {
    this.isToggle = !this.isToggle;
  }
  clickOutside(e: any) {
    this.isToggle = false;
  }
  job = ['Starter', 'Advanced', 'Expert'];
  category = [
    'Ad, Sales, Social Media Copy',
    'Articel & Blog Posts',
    'Beta Reading',
    'Book Reading',
    'Business Names & Slogans',
    'Creative Writing (UX, Speechwriting, Technical, Advice)',
    'Rsearch & Summaries',
    'Rsume Writing',
  ];
  subCategory = [
    'Display Advertising',
    'Commerce Marketing',
    'Influencer Marketing',
    'Marketing Advice',
    'Marketing Strategy (Content, Email)',
    'Mobile App Marketing',
  ];
  location = [
    'Afghanistan',
    'Aland Islands',
    'Albania',
    'Algeria',
    'American Samoa',
    'Andorra',
    'Angola',
    'Anguilla',
    'Antarctica',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
  ];
  emp = [
    'Succesfull job - low to hight',
    'Successfull job - hight to low',
    '% task rated satifed - low to hight',
    '% task rated satifed - low to hight',
  ];
}
