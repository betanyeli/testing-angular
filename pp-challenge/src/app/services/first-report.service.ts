import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http/';
import { FirstRep } from '../interfaces/first-report.interface';

@Injectable({
  providedIn: 'root'
})
export class FirstReportService {
  info: FirstRep = {};
  endpoint = 'http://168.232.165.184/prueba/array';
  constructor( private http: HttpClient) {

this.generateReport();

   }
   private generateReport() {
    this.http.get(this.endpoint)
    .subscribe( (res: FirstRep) => {
      this.info = res;
    });
   }

  }
