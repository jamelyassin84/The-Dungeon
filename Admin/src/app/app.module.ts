import { MatCheckboxModule } from '@angular/material/checkbox'
import { WeightLiftingModule } from './modules/admin/weight-lifting/weight-lifting.module'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ExtraOptions, PreloadAllModules, RouterModule } from '@angular/router'
import { MarkdownModule } from 'ngx-markdown'
import { FuseModule } from '@fuse'
import { FuseConfigModule } from '@fuse/services/config'
import { FuseMockApiModule } from '@fuse/lib/mock-api'
import { CoreModule } from 'app/core/core.module'
import { appConfig } from 'app/core/config/app.config'
import { mockApiServices } from 'app/mock-api'
import { LayoutModule } from 'app/layout/layout.module'
import { AppComponent } from 'app/app.component'
import { appRoutes } from 'app/app.routing'
import { HomeModule } from './modules/admin/home/home.module'
import { LocationModule } from './modules/admin/location/location.module'
import { CoachingModule } from './modules/admin/coaching/coaching.module'
import { OurStoryModule } from './modules/admin/our-story/our-story.module'
import { InboxModule } from './modules/admin/inbox/inbox.module'
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { MainInterceptor } from './interceptors/main.interceptor'
import { HomeSection6Component } from './modules/home/pages/home-section6/home-section6.component'
import { IvyCarouselModule } from 'angular-responsive-carousel'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { FuseCardModule } from '@fuse/components/card'
import { FuseAlertModule } from '@fuse/components/alert'
import { SharedModule } from './shared/shared.module'
import { FormsModule } from '@angular/forms'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'

const routerConfig: ExtraOptions = {
	preloadingStrategy: PreloadAllModules,
	scrollPositionRestoration: 'enabled',
}

@NgModule({
	declarations: [AppComponent, HomeSection6Component],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		RouterModule.forRoot(appRoutes, routerConfig),

		// Fuse, FuseConfig & FuseMockAPI
		FuseModule,
		FuseConfigModule.forRoot(appConfig),
		FuseMockApiModule.forRoot(mockApiServices),

		// Core module of your application
		CoreModule,

		// Layout module of your application
		LayoutModule,

		// 3rd party modules that require global configuration via forRoot
		MarkdownModule.forRoot({}),

		//APP Modules
		HomeModule,
		WeightLiftingModule,
		LocationModule,
		CoachingModule,
		OurStoryModule,
		InboxModule,

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
		FormsModule,
		MatSlideToggleModule,
		BrowserAnimationsModule,
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: MainInterceptor,
			multi: true,
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
