import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SonglistComponent } from './songlist/songlist.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {DecimalPipe} from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { DetailsComponent } from './details/details.component';
import { SearchPipe } from './search.pipe';
@NgModule({
  declarations: [
    AppComponent,
    SonglistComponent,
    NavbarComponent,
    DetailsComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  providers: [DecimalPipe],
  bootstrap: [AppComponent],
  exports:[CommonModule]
})
export class AppModule { }
