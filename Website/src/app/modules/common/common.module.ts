import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NavbarComponent } from './navbar/navbar.component'
import { FooterComponent } from './footer/footer.component'
import { SidebarComponent } from './sidebar/sidebar.component'
import { HomeSection4Component } from '../home/home-section4/home-section4.component'
import { WeightLiftingSection3Component } from '../weight-lifting/weight-lifting-section3/weight-lifting-section3.component'
import { RouterModule } from '@angular/router'
import { HomeCarouselImgsComponent } from './home-carousel-imgs/home-carousel-imgs.component'
import { PackageCardComponent } from './package-card/package-card.component'
import { CommunityComponent } from './community/community.component'
import { Title } from '@angular/platform-browser'
import { IvyCarouselModule } from 'angular-responsive-carousel'
import { WeightLiftersComponent } from './weight-lifters/weight-lifters.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ParallaxModule } from 'ngx-parallax'
import { ParallaxDirective } from 'src/app/directives/parallax.directive'

@NgModule({
	declarations: [
		NavbarComponent,
		FooterComponent,
		SidebarComponent,
		HomeSection4Component,
		WeightLiftingSection3Component,
		HomeCarouselImgsComponent,
		PackageCardComponent,
		CommunityComponent,
		WeightLiftersComponent,
		ParallaxDirective,
	],
	imports: [
		CommonModule,
		RouterModule,
		IvyCarouselModule,
		BrowserAnimationsModule,
		ParallaxModule,
	],
	exports: [
		NavbarComponent,
		FooterComponent,
		SidebarComponent,
		HomeSection4Component,
		WeightLiftingSection3Component,
		HomeCarouselImgsComponent,
		PackageCardComponent,
		WeightLiftersComponent,
		ParallaxDirective,
	],
	providers: [Title],
})
export class Common {}
