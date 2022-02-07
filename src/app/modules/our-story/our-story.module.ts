import { Common } from './../common/common.module'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { OurStoryComponent } from './our-story/our-story.component'

@NgModule({
	declarations: [OurStoryComponent],
	imports: [CommonModule, Common],
})
export class OurStoryModule {}
