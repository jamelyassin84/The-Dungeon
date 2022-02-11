import { FuseAlertModule } from './../../../../@fuse/components/alert/alert.module'
import { FuseCardModule } from './../../../../@fuse/components/card/card.module'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomeComponent } from './home/home.component'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { HomeSection1Component } from './pages/home-section1/home-section1.component'
import { HomeSection2Component } from './pages/home-section2/home-section2.component'
import { HomeSection3Component } from './pages/home-section3/home-section3.component'
import { HomeSection4Component } from './pages/home-section4/home-section4.component'
import { HomeSection5Component } from './pages/home-section5/home-section5.component'
import { RouterModule } from '@angular/router'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { SharedModule } from 'app/shared/shared.module'
import { IvyCarouselModule } from 'angular-responsive-carousel'

@NgModule({
	declarations: [
		HomeComponent,
		HomeSection1Component,
		HomeSection2Component,
		HomeSection3Component,
		HomeSection4Component,
		HomeSection5Component,
	],
	imports: [
		CommonModule,
		IvyCarouselModule,
		MatButtonModule,
		MatCheckboxModule,
		MatFormFieldModule,
		MatIconModule,
		MatInputModule,
		MatProgressSpinnerModule,
		FuseCardModule,
		FuseAlertModule,
		SharedModule,
		RouterModule,
	],
})
export class HomeModule {}
