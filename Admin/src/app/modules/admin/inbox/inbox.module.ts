import { MatCheckboxModule } from '@angular/material/checkbox'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { InboxComponent } from './inbox/inbox.component'
import { MatIconModule } from '@angular/material/icon'
import { RouterModule } from '@angular/router'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { FuseCardModule } from '@fuse/components/card'
import { FuseAlertModule } from '@fuse/components/alert'
import { SharedModule } from 'app/shared/shared.module'
import { InboxDetailsComponent } from './inbox-details/inbox-details.component'
import { Settings1Component } from './settings/settings.component'

@NgModule({
	declarations: [InboxComponent, InboxDetailsComponent, Settings1Component],
	imports: [
		CommonModule,
		RouterModule,
		MatButtonModule,
		MatCheckboxModule,
		MatFormFieldModule,
		MatIconModule,
		MatInputModule,
		MatProgressSpinnerModule,
		FuseCardModule,
		FuseAlertModule,
		SharedModule,
	],
})
export class InboxModule {}
