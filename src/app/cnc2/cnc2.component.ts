import { Component } from '@angular/core';
import { EmpDataLinkService } from '../emp-data-link.service';

@Component({
  selector: 'app-cnc2',
  templateUrl: './cnc2.component.html',
  styleUrls: ['./cnc2.component.css']
})
export class Cnc2Component{
  public s:any;
  constructor(private s1:EmpDataLinkService){}
  ngOnInit(){

  }
  storeData(data:any)
  {
    this.s1.hello2(data).subscribe((result)=>{
      console.warn(result);
      alert("Succeesfully Data Submitted")
    })
  }

}
