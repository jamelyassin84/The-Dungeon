// Angular Modules
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HashLocationStrategy, LocationStrategy } from '@angular/common'

// App Modules
import { HomeModule } from './modules/home/home.module'
import { CoachingModule } from './modules/coaching/coaching.module'
import { Common } from './modules/common/common.module'
import { LocationModule } from './modules/location/location.module'
import { OurStoryModule } from './modules/our-story/our-story.module'
import { WeightLiftingModule } from './modules/weight-lifting/weight-lifting.module'

// Components
import { AppComponent } from './app.component'
import { HttpClientModule } from '@angular/common/http'
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component'

@NgModule({
	declarations: [AppComponent, PageNotFoundComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HomeModule,
		CoachingModule,
		Common,
		LocationModule,
		OurStoryModule,
		WeightLiftingModule,
		HttpClientModule,
		BrowserAnimationsModule,
	],
	providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
	bootstrap: [AppComponent],
})
export class AppModule {}
