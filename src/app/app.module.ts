import { FooterComponent } from './footer.component';

import { NavbarComponent } from './navbar.component';
import { HeroComponent } from './hero.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';
import { RestaurentService } from './restaurent.service';
import { CityComponent } from './city.component';
import { HttpModule }    from '@angular/http';
import { SearchComponent } from './restaurent-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    NavbarComponent,
    CityComponent,
    SearchComponent,
    FooterComponent
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [RestaurentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
