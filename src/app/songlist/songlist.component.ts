import { Component,PipeTransform , OnInit } from '@angular/core';
import { AppserviceService } from '../appservice.service';
import { DecimalPipe } from '@angular/common';
import { FormGroup,FormControl } from '@angular/forms';





@Component({
  selector: 'app-songlist',
  templateUrl: './songlist.component.html',
  styleUrls: ['./songlist.component.scss']
})
export class SonglistComponent implements OnInit {
  data = [];
  
  filter = new FormControl('');
  setClickedRow : Function;
  selectedRow;
  changedval: any;


  constructor(private appservice: AppserviceService,private pipe: DecimalPipe) { this.setClickedRow = function(index){
    this.selectedRow = index;
}
this.appservice.getsong().subscribe(data=>{
 
  data['feed'].entry.forEach(ele => {
    this.data.push({
      label:ele.rights.label,
      title:ele['im:name'].label,
      price:ele['im:price'].label,
      artist:ele['im:artist'].label
    });
  });
  


})
  this.appservice.filterval.subscribe(data=>{
    this.filter=data;
    this.data=this.data;
    this.filter.valueChanges.subscribe(data=>{
      this.changedval=data;
    })
 
  })
  
  }

  ngOnInit(){  
  }
  
  details(i){
    this.appservice.flagtrue(i);
      }

}
