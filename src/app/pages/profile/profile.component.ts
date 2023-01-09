import socialData from './../../../data/social-media.json';
import { Component, OnInit } from '@angular/core';

interface Social {
  path: string;
  name: string;
  link: string;
  fav: string;
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  social: Social[] = socialData;
  constructor() { }

  ngOnInit() {
  }

}
