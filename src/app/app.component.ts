import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { LoadingService } from './core/loading-service/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewChecked {
  title = 'personal-project';
  loading = this.loader.loading$;

  constructor(public loader: LoadingService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {}

  ngAfterViewChecked() {
    this.cdr.detectChanges();
  }
}
