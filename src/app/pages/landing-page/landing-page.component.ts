import { Component } from '@angular/core';

import * as AOS from 'aos'

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  ngOnInit(){
    AOS.init();
  }
}
