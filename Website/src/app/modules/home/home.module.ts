import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomeMainComponent } from './home-main/home-main.component'
import { HomeSection1Component } from './home-section1/home-section1.component'
import { HomeSection2Component } from './home-section2/home-section2.component'
import { HomeSection3Component } from './home-section3/home-section3.component'
import { HomeSection5Component } from './home-section5/home-section5.component'
import { Common } from '../common/common.module'
import { RouterModule } from '@angular/router'
import { IvyCarouselModule } from 'angular-responsive-carousel'
import { ParallaxModule, ParallaxConfig } from 'ngx-parallax'
import { NgxParallaxScrollModule } from 'ngx-parallax-scroll'

@NgModule({
	declarations: [
		HomeMainComponent,
		HomeSection1Component,
		HomeSection2Component,
		HomeSection3Component,
		HomeSection5Component,
	],
	imports: [
		ParallaxModule,
		CommonModule,
		Common,
		RouterModule,
		NgxParallaxScrollModule,
		ParallaxModule,
	],
	exports: [],
})
export class HomeModule {}
