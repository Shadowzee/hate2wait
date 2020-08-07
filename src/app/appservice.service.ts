import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

  detailsflag = new BehaviorSubject<boolean>(false);
  detailsno = new BehaviorSubject<any>(-1);
  filterval=new BehaviorSubject<any>(new FormControl(''));
  constructor(private https:HttpClient) { }
  flagtrue(i){
    this.detailsflag.next(true);
    this.detailsno.next(i);
  }
  filter(val){
    this.filterval.next(val);
  }
 
  getsong(){
   return  this.https.get('https://itunes.apple.com/us/rss/topalbums/limit=100/json');
  }
}
