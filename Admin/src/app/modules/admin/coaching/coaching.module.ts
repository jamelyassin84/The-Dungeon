import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CoachingComponent } from './coaching/coaching.component'
import { CoachingSection1Component } from './pages/coaching-section1/coaching-section1.component'
import { CoachingSection2Component } from './pages/coaching-section2/coaching-section2.component'
import { RouterModule } from '@angular/router'
import { MatButtonModule } from '@angular/material/button'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { FuseCardModule } from '@fuse/components/card'
import { FuseAlertModule } from '@fuse/components/alert'
import { SharedModule } from 'app/shared/shared.module'
import { IvyCarouselModule } from 'angular-responsive-carousel'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { _MatSlideToggleRequiredValidatorModule } from '@angular/material/slide-toggle'
import { MatSelectModule } from '@angular/material/select'
import { FormsModule } from '@angular/forms'

@NgModule({
	declarations: [
		CoachingComponent,
		CoachingSection1Component,
		CoachingSection2Component,
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
		MatSelectModule,
		BrowserAnimationsModule,
		_MatSlideToggleRequiredValidatorModule,
	],
})
export class CoachingModule {}
