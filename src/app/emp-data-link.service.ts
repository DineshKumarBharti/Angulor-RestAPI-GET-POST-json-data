import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpDataLinkService {
  urL:string="http://localhost:3000/employee";
  constructor(public http1: HttpClient) { }
  hello()
  {
    return this.http1.get(this.urL);
  }
  hello2(data:any)
  {
    return this.http1.post(this.urL,data);
  }
}
