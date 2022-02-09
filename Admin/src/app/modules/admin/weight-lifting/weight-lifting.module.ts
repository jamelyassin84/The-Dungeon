import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { WeightLiftingComponent } from './weight-lifting/weight-lifting.component'
import { WeightLiftingSection1Component } from './pages/weight-lifting-section1/weight-lifting-section1.component'
import { WeightLiftingSection2Component } from './pages/weight-lifting-section2/weight-lifting-section2.component'
import { WeightLiftingSection3Component } from './pages/weight-lifting-section3/weight-lifting-section3.component'
import { WeightLiftingSection4Component } from './pages/weight-lifting-section4/weight-lifting-section4.component'
import { RouterModule } from '@angular/router'

@NgModule({
	declarations: [
		WeightLiftingComponent,
		WeightLiftingSection1Component,
		WeightLiftingSection2Component,
		WeightLiftingSection3Component,
		WeightLiftingSection4Component,
	],
	imports: [CommonModule, RouterModule],
})
export class WeightLiftingModule {}
