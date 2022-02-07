import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeMainComponent } from './home-main/home-main.component';
import { HomeSection1Component } from './home-section1/home-section1.component';
import { HomeSection2Component } from './home-section2/home-section2.component';
import { HomeSection3Component } from './home-section3/home-section3.component';
import { HomeSection4Component } from './home-section4/home-section4.component';
import { HomeSection5Component } from './home-section5/home-section5.component';



@NgModule({
  declarations: [
    HomeMainComponent,
    HomeSection1Component,
    HomeSection2Component,
    HomeSection3Component,
    HomeSection4Component,
    HomeSection5Component
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
