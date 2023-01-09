import { AlbumComponent } from './pages/album/album.component';
import { ReportComponent } from './pages/report/report.component';
import { PixComponent } from './pages/pix/pix.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  declarations: [
    ProfileComponent,
    AppComponent,
    PixComponent,
    ProfileComponent,
    AboutComponent,
    ReportComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
