import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../appservice.service';
const sidedetailsdata = [
  {
    list:["Bundli Technologies","Hector Beverage Private Ltd","Puma sports private limited","Dewarai Housing","Infosys ltd","Think & Learn Private Ltd","Delhivery Private Ltd","Wow Momo Food Private Ltd","Rebel Foods private Ltd","Lendingkart private ltd","Gala Private LTD","Balaji privae LTd","Vodafone Private Ltd"]
  },
  {
    list:["Puma sports private limited","Dewarai Housing","Infosys ltd","Think & Learn Private Ltd","Delhivery Private Ltd","Wow Momo Food Private Ltd","Rebel Foods private Ltd"]
  },
  {
    list:["Dewarai Housing","Infosys ltd","Think & Learn Private Ltd","Delhivery Private Ltd","Wow Momo Food Private Ltd","Rebel Foods private Ltd","Lendingkart private ltd","Gala Private LTD","Balaji privae LTd","Vodafone Private Ltd"]
  },
  {
    list:[,"Infosys ltd","Think & Learn Private Ltd","Delhivery Private Ltd","Wow Momo Food Private Ltd","Rebel Foods private Ltd"]
  },
  {
    list:["Bundli Technologies","Hector Beverage Private Ltd","Dewarai Housing","Infosys ltd","Think & Learn Private Ltd","Delhivery Private Ltd","Wow Momo Food Private Ltd","Rebel Foods private Ltd","Lendingkart private ltd","Gala Private LTD","Balaji privae LTd","Vodafone Private Ltd"]
  },
  {
    list:["Puma sports private limited","Dewarai Housing","Think & Learn Private Ltd","Delhivery Private Ltd","Wow Momo Food Private Ltd","Rebel Foods private Ltd"]
  },
  {
    list:["Bundli Technologies","Hector Beverage Private Ltd","Think & Learn Private Ltd","Delhivery Private Ltd","Wow Momo Food Private Ltd","Rebel Foods private Ltd","Lendingkart private ltd","Gala Private LTD","Balaji privae LTd","Vodafone Private Ltd"]
  },
  {
    list:["Puma sports private limited","Dewarai Housing","Infosys ltd","Think & Learn Private Ltd","Delhivery Private Ltd","Wow Momo Food Private Ltd","Rebel Foods private Ltd"]
  }
  
];
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
      console.log(this.showdata)
    }
    });
  }

}
