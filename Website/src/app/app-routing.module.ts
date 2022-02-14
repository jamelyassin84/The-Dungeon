import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CoachingComponent } from './modules/coaching/coaching/coaching.component'
import { HomeMainComponent } from './modules/home/home-main/home-main.component'
import { LocationComponent } from './modules/location/location/location.component'
import { OurStoryComponent } from './modules/our-story/our-story/our-story.component'
import { WeightLiftingMainComponent } from './modules/weight-lifting/weight-lifting-main/weight-lifting-main.component'

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'home',
	},
	{
		path: 'home',
		component: HomeMainComponent,
	},
	{
		path: 'competition',
		component: WeightLiftingMainComponent,
	},
	{
		path: 'location',
		component: LocationComponent,
	},
	{
		path: 'coaching',
		component: CoachingComponent,
	},
	{
		path: 'our-story',
		component: OurStoryComponent,
	},
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
