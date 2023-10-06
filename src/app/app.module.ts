import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoListComponent } from './video-list/video-list.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, VideoListComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
