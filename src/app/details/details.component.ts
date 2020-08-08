import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../appservice.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  flag=false;
  detailsno;
  sidedetailsdata;
  showdata: any;
  constructor(private tableser: AppserviceService) {
    this.tableser.getsong().subscribe(data=>{
      this.sidedetailsdata=data.feed.entry;
    })
   }

  ngOnInit(): void {
    this.tableser.detailsflag.subscribe(data=>{
      this.flag=data;
    });
    this.tableser.detailsno.subscribe(data=>{
      this.detailsno=data;
      if(data!="-1"){
      this.showdata=this.sidedetailsdata[this.detailsno];
     
    }
    });
  }

}
