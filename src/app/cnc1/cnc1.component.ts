import { Component } from '@angular/core';
import { EmpDataLinkService } from '../emp-data-link.service';

@Component({
  selector: 'app-cnc1',
  templateUrl: './cnc1.component.html',
  styleUrls: ['./cnc1.component.css']
})
export class Cnc1Component {
  public s:any;
  constructor(private s1:EmpDataLinkService){}
  ngOnInit(): void {
    this.s1.hello().subscribe(data=>this.s=data);
 }
}
