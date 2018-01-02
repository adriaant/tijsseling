import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {PublicationsComponent} from './components/publications/publications.component';
import {HeaderComponent} from './components/header/header.component';
import {RouteNavigator} from './services/route-navigator.service';
import {PublicationService} from './services/publication.service';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    PublicationsComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    RouteNavigator,
    PublicationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
