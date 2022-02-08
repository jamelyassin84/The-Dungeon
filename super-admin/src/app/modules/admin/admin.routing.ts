import { Route } from '@angular/router'
import { CoachingComponent } from './coaching/coaching/coaching.component'
import { HomeRoutes } from './home/home.routes'
import { HomeComponent } from './home/home/home.component'
import { InboxComponent } from './inbox/inbox/inbox.component'
import { LocationComponent } from './location/location/location.component'
import { OurStoryComponent } from './our-story/our-story/our-story.component'
import { WeightLiftingRoutes } from './weight-lifting/weight-lifting.routes'
import { WeightLiftingComponent } from './weight-lifting/weight-lifting/weight-lifting.component'

export const adminRoutes: Route[] = [
	{
		path: 'home',
		component: HomeComponent,
		children: HomeRoutes,
	},
	{
		path: 'weight-lifting',
		component: WeightLiftingComponent,
		children: WeightLiftingRoutes,
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
	{
		path: 'inbox',
		component: InboxComponent,
	},
]
