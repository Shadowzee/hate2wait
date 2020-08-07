import { Component,PipeTransform , OnInit } from '@angular/core';
import { AppserviceService } from '../appservice.service';
import { DecimalPipe } from '@angular/common';
import { FormGroup,FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
// interface Country {
//   name: string;
//   flag: string;
//   area: number;
//   population: number;
// }
const data: any[] = [{
  date: 'Oct 6',
  listName: 'Two companies',
  entity: 2,
  action: ''
}, {
  date: 'Feb 19',
  listName: 'Custom',
  entity: 20,
  action: ''
},
{
  date: 'Jan 22',
  listName: 'Mumbai',
  entity: 2,
  action: ''
}];
function search(text: string, pipe: PipeTransform): any[] {
  return data.filter(country => {
    const term = text.toLowerCase();
    return country.date.toLowerCase().includes(term)
    ||country.listName.toLowerCase().includes(term)
      
        || pipe.transform(country.entity).includes(term);
  });
}

@Component({
  selector: 'app-songlist',
  templateUrl: './songlist.component.html',
  styleUrls: ['./songlist.component.scss']
})
export class SonglistComponent implements OnInit {
  data$: Observable<any[]>;
  filter = new FormControl('');
  setClickedRow : Function;
  selectedRow;

  constructor(private appservice: AppserviceService,private pipe: DecimalPipe) { this.setClickedRow = function(index){
    this.selectedRow = index;
}
  this.appservice.filterval.subscribe(data=>{
    this.filter=data;
   
    this.data$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => search(text, pipe))
    );
  })
  }

  ngOnInit(){

    
  }
  details(i){
    this.appservice.flagtrue(i);
      }

}
