import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FiltercontainerComponent } from './filtercontainer/filtercontainer.component';
import { CountryCardsComponent } from './country-cards/country-cards.component';
import { CountryItemComponent } from './country-cards/country-item/country-item.component';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ErrorPageComponent } from './errorpage/errorpage.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FiltercontainerComponent,
    CountryCardsComponent,
    CountryItemComponent,
    CountryDetailsComponent,
    HomePageComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
