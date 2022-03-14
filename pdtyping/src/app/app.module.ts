import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderComponent } from './loader/loader.component';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';
import { DetailListComponent } from './detail-list/detail-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    SidenavListComponent,
    DetailListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
