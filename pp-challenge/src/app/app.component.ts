import { Component } from '@angular/core';
import { FirstReportService } from './services/first-report.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public _FIRST_REPORT: FirstReportService) {

  }
}
