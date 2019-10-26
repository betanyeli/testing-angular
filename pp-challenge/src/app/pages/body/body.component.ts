import { Component, OnInit } from '@angular/core';
import { FirstReportService } from '../../services/first-report.service';
import { HttpClient } from '@angular/common/http/';




@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})

export class BodyComponent implements OnInit {
  endpoint = 'http://168.232.165.184/prueba/array';
  constructor( public service: FirstReportService, private http: HttpClient ) { }
generateReport() {
  this.http.get(this.endpoint).subscribe(response => response);
}
  ngOnInit() {
  }
}
