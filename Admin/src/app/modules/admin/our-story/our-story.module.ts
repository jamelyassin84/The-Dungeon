import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { OurStoryComponent } from './our-story/our-story.component'
import { MatButtonModule } from '@angular/material/button'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { FuseCardModule } from '@fuse/components/card'
import { FuseAlertModule } from '@fuse/components/alert'
import { SharedModule } from 'app/shared/shared.module'
import { RouterModule } from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatSelectModule } from '@angular/material/select'
import { FormsModule } from '@angular/forms'
import { IvyCarouselModule } from 'angular-responsive-carousel'

@NgModule({
	declarations: [OurStoryComponent],
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
	],
})
export class OurStoryModule {}
