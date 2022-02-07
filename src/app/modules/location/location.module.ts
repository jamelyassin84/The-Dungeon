import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LocationComponent } from './location/location.component'
import { Common } from '../common/common.module'

@NgModule({
	declarations: [LocationComponent],
	imports: [CommonModule, Common],
})
export class LocationModule {}
