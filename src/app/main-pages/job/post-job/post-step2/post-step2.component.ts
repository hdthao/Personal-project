import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/core/model-categories/categories.service';

@Component({
  selector: 'app-post-step2',
  templateUrl: './post-step2.component.html',
  styleUrls: ['./post-step2.component.scss']
})
export class PostStep2Component implements OnInit {
  listCategory:any;
  categoryName:string;

  constructor(private categoryService: CategoriesService) { }

  ngOnInit(): void {
    this.getCategoriesFromApi();
  }
  getCategoriesFromApi() {
    this.categoryService.getCategory().subscribe((data) => {
      this.listCategory = data;
    })
  }
  getCategoryName(data:any) {
    this.categoryName = data;
  }
}
