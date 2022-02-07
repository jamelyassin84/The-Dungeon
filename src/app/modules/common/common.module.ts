import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NavbarComponent } from './navbar/navbar.component'
import { FooterComponent } from './footer/footer.component'
import { SidebarComponent } from './sidebar/sidebar.component'
import { HomeSection4Component } from '../home/home-section4/home-section4.component'
import { WeightLiftingSection3Component } from '../weight-lifting/weight-lifting-section3/weight-lifting-section3.component'

@NgModule({
	declarations: [
		NavbarComponent,
		FooterComponent,
		SidebarComponent,
		HomeSection4Component,
		WeightLiftingSection3Component,
	],
	imports: [CommonModule],
	exports: [
		NavbarComponent,
		FooterComponent,
		SidebarComponent,
		HomeSection4Component,
		WeightLiftingSection3Component,
	],
})
export class Common {}
