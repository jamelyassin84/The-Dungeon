import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NavbarComponent } from './navbar/navbar.component'
import { FooterComponent } from './footer/footer.component'
import { SidebarComponent } from './sidebar/sidebar.component'
import { HomeSection4Component } from '../home/home-section4/home-section4.component'
import { WeightLiftingSection3Component } from '../weight-lifting/weight-lifting-section3/weight-lifting-section3.component'
import { RouterModule } from '@angular/router'
import { HomeCarouselImgsComponent } from './home-carousel-imgs/home-carousel-imgs.component'

@NgModule({
	declarations: [
		NavbarComponent,
		FooterComponent,
		SidebarComponent,
		HomeSection4Component,
		WeightLiftingSection3Component,
		HomeCarouselImgsComponent,
	],
	imports: [CommonModule, RouterModule],
	exports: [
		NavbarComponent,
		FooterComponent,
		SidebarComponent,
		HomeSection4Component,
		WeightLiftingSection3Component,
		HomeCarouselImgsComponent,
	],
})
export class Common {}
