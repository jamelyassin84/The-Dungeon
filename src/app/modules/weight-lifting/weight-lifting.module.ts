import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { WeightLiftingMainComponent } from './weight-lifting-main/weight-lifting-main.component'
import { WeightLiftingSection1Component } from './weight-lifting-section1/weight-lifting-section1.component'
import { WeightLiftingSection2Component } from './weight-lifting-section2/weight-lifting-section2.component'
import { WeightLiftingSection3Component } from './weight-lifting-section3/weight-lifting-section3.component'
import { Common } from '../common/common.module'

@NgModule({
	declarations: [
		WeightLiftingMainComponent,
		WeightLiftingSection1Component,
		WeightLiftingSection2Component,
		WeightLiftingSection3Component,
	],
	imports: [CommonModule, Common],
})
export class WeightLiftingModule {}
