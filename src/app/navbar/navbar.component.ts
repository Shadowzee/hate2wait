import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AppserviceService } from '../appservice.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  filter = new FormControl('');
  constructor(private tbs:AppserviceService) { }

  ngOnInit(): void {
  }
  filterval(){
    this.tbs.filter(this.filter);
  }
}
