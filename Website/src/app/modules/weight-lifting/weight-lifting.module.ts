import { IvyCarouselModule } from 'angular-responsive-carousel'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { WeightLiftingMainComponent } from './weight-lifting-main/weight-lifting-main.component'
import { WeightLiftingSection1Component } from './weight-lifting-section1/weight-lifting-section1.component'
import { WeightLiftingSection2Component } from './weight-lifting-section2/weight-lifting-section2.component'
import { Common } from '../common/common.module'
import { FormsModule } from '@angular/forms'
import { WeightLiftingSection4Component } from './weight-lifting-section4/weight-lifting-section4.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component'

@NgModule({
	declarations: [
		WeightLiftingMainComponent,
		WeightLiftingSection1Component,
		WeightLiftingSection2Component,
		WeightLiftingSection4Component,
  RegistrationFormComponent,
	],
	imports: [CommonModule, Common, FormsModule, IvyCarouselModule],
})
export class WeightLiftingModule {}
