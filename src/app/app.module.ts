import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { RevistaComponent } from './component/revista/revista.component';
import { ContactoComponent } from './component/contacto/contacto.component';
import { SearchComponent } from './component/search/search.component';
import { FooterComponent } from './component/footer/footer.component';
import { AutorComponent } from './component/autor/autor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// angular material 
import {MatGridListModule} from '@angular/material/grid-list'; 
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RevistaComponent,
    ContactoComponent,
    SearchComponent,
    FooterComponent,
    AutorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    MatGridListModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
