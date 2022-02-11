import { MatButtonModule } from '@angular/material/button'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { FuseCardModule } from './../../../../@fuse/components/card/card.module'
import { FuseAlertModule } from './../../../../@fuse/components/alert/alert.module'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { WeightLiftingComponent } from './weight-lifting/weight-lifting.component'
import { WeightLiftingSection1Component } from './pages/weight-lifting-section1/weight-lifting-section1.component'
import { WeightLiftingSection2Component } from './pages/weight-lifting-section2/weight-lifting-section2.component'
import { WeightLiftingSection3Component } from './pages/weight-lifting-section3/weight-lifting-section3.component'
import { WeightLiftingSection4Component } from './pages/weight-lifting-section4/weight-lifting-section4.component'
import { RouterModule } from '@angular/router'
import { SharedModule } from 'app/shared/shared.module'
import { WeightLiftingSecondSectionComponent } from './pages/weight-lifting-second-section/weight-lifting-second-section.component'
import { IvyCarouselModule } from 'angular-responsive-carousel'
import { FormsModule } from '@angular/forms'

@NgModule({
	declarations: [
		WeightLiftingComponent,
		WeightLiftingSection1Component,
		WeightLiftingSection2Component,
		WeightLiftingSection3Component,
		WeightLiftingSection4Component,
		WeightLiftingSecondSectionComponent,
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
		FormsModule,
	],
})
export class WeightLiftingModule {}
