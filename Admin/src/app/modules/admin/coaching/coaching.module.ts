import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CoachingComponent } from './coaching/coaching.component'
import { CoachingSection1Component } from './pages/coaching-section1/coaching-section1.component'
import { CoachingSection2Component } from './pages/coaching-section2/coaching-section2.component'
import { RouterModule } from '@angular/router'

@NgModule({
	declarations: [
		CoachingComponent,
		CoachingSection1Component,
		CoachingSection2Component,
	],
	imports: [CommonModule, RouterModule],
})
export class CoachingModule {}
