import { AlbumComponent } from './pages/album/album.component';
import { ReportComponent } from './pages/report/report.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AboutComponent } from './pages/about/about.component';
import { PixComponent } from './pages/pix/pix.component';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: "",
    component: AppComponent,
    children: [
      {
        path: "",
        component: ProfileComponent
      },
      {
        path: "pix",
        component: PixComponent
      },
      {
        path: "about",
        component: AboutComponent
      },
      {
        path: "report",
        component: ReportComponent
      },
      {
        path: "album",
        component: AlbumComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
