import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CoachingComponent } from './coaching/coaching.component'
import { Common } from '../common/common.module'

@NgModule({
	declarations: [CoachingComponent],
	imports: [CommonModule, Common],
})
export class CoachingModule {}
