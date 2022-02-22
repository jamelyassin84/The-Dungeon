import {
	Coaching,
	CompetitionSection1,
	CompetitionSection2,
	CompetitionSection3,
	CompetitionSection4,
	CompetitionSection5,
	Footer,
	Email,
	HomePricing,
	HomeSection1,
	HomeSection2,
	HomeSection3,
	HomeSection4,
	Inbox,
	Interacted,
	OurStory,
	Participant,
	RegistrationField,
	Review,
	Rule,
	StoryImages,
	RuleValue,
	Coaches,
	Location,
	User,
	HomeSection6,
} from './../models/types'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { API } from './api.routes'
import { BaseService } from './base.service'

@Injectable({
	providedIn: 'root',
})
export class CoachesService extends BaseService<Coaches[]> {
	constructor(public _http: HttpClient) {
		super(_http, API.COACHES)
	}
}

@Injectable({
	providedIn: 'root',
})
export class CoachingService extends BaseService<Coaching> {
	constructor(public _http: HttpClient) {
		super(_http, API.COACHING)
	}
}

@Injectable({
	providedIn: 'root',
})
export class CompetitionSection1Service extends BaseService<CompetitionSection1> {
	constructor(public _http: HttpClient) {
		super(_http, API.COMPETITION_SECTION_1)
	}
}

@Injectable({
	providedIn: 'root',
})
export class CompetitionSection2Service extends BaseService<CompetitionSection2> {
	constructor(public _http: HttpClient) {
		super(_http, API.COMPETITION_SECTION_2)
	}
}

@Injectable({
	providedIn: 'root',
})
export class CompetitionSection3Service extends BaseService<CompetitionSection3> {
	constructor(public _http: HttpClient) {
		super(_http, API.COMPETITION_SECTION_3)
	}
}

@Injectable({
	providedIn: 'root',
})
export class CompetitionSection4Service extends BaseService<CompetitionSection4> {
	constructor(public _http: HttpClient) {
		super(_http, API.COMPETITION_SECTION_4)
	}
}

@Injectable({
	providedIn: 'root',
})
export class CompetitionSection5Service extends BaseService<CompetitionSection5> {
	constructor(public _http: HttpClient) {
		super(_http, API.COMPETITION_SECTION_5)
	}
}

@Injectable({
	providedIn: 'root',
})
export class EmailService extends BaseService<Email> {
	constructor(public _http: HttpClient) {
		super(_http, API.EMAIL)
	}
}

@Injectable({
	providedIn: 'root',
})
export class Footer5Service extends BaseService<Footer> {
	constructor(public _http: HttpClient) {
		super(_http, API.FOOTER)
	}
}

@Injectable({
	providedIn: 'root',
})
export class HomePricingService extends BaseService<HomePricing> {
	constructor(public _http: HttpClient) {
		super(_http, API.HOME_PRICING)
	}
}

@Injectable({
	providedIn: 'root',
})
export class HomeSection1Service extends BaseService<HomeSection1> {
	constructor(public _http: HttpClient) {
		super(_http, API.HOME_SECTION_1)
	}
}

@Injectable({
	providedIn: 'root',
})
export class HomeSection2Service extends BaseService<HomeSection2> {
	constructor(public _http: HttpClient) {
		super(_http, API.HOME_SECTION_2)
	}
}

@Injectable({
	providedIn: 'root',
})
export class HomeSection3Service extends BaseService<HomeSection3> {
	constructor(public _http: HttpClient) {
		super(_http, API.HOME_SECTION_3)
	}
}

@Injectable({
	providedIn: 'root',
})
export class HomeSection4Service extends BaseService<HomeSection4> {
	constructor(public _http: HttpClient) {
		super(_http, API.HOME_SECTION_4)
	}
}

@Injectable({
	providedIn: 'root',
})
export class HomeSliderImageService extends BaseService<HomeSliderImageService> {
	constructor(public _http: HttpClient) {
		super(_http, API.HOME_SLIDER)
	}
}

@Injectable({
	providedIn: 'root',
})
export class InboxService extends BaseService<Inbox> {
	constructor(public _http: HttpClient) {
		super(_http, API.INBOX)
	}
}

@Injectable({
	providedIn: 'root',
})
export class InteractedService extends BaseService<Interacted> {
	constructor(public _http: HttpClient) {
		super(_http, API.INTERACTED)
	}
}

@Injectable({
	providedIn: 'root',
})
export class LocationService extends BaseService<Location> {
	constructor(public _http: HttpClient) {
		super(_http, API.LOCATION)
	}
}

@Injectable({
	providedIn: 'root',
})
export class OurStoryService extends BaseService<OurStory> {
	constructor(public _http: HttpClient) {
		super(_http, API.OUR_STORY)
	}
}

@Injectable({
	providedIn: 'root',
})
export class ParticipantService extends BaseService<Participant> {
	constructor(public _http: HttpClient) {
		super(_http, API.PARTICIPANT)
	}
}

@Injectable({
	providedIn: 'root',
})
export class RegistrationFieldService extends BaseService<RegistrationField> {
	constructor(public _http: HttpClient) {
		super(_http, API.REGISTRATION_FIELD)
	}
}

@Injectable({
	providedIn: 'root',
})
export class ReviewService extends BaseService<Review> {
	constructor(public _http: HttpClient) {
		super(_http, API.REVIEW)
	}
}

@Injectable({
	providedIn: 'root',
})
export class RuleService extends BaseService<Rule> {
	constructor(public _http: HttpClient) {
		super(_http, API.RULE)
	}
}

@Injectable({
	providedIn: 'root',
})
export class RuleValueService extends BaseService<RuleValue> {
	constructor(public _http: HttpClient) {
		super(_http, API.RULE_VALUE)
	}
}

@Injectable({
	providedIn: 'root',
})
export class StoryImagesService extends BaseService<StoryImages> {
	constructor(public _http: HttpClient) {
		super(_http, API.STORY_IMAGE)
	}
}

@Injectable({
	providedIn: 'root',
})
export class UserService extends BaseService<User> {
	constructor(public _http: HttpClient) {
		super(_http, API.USER)
	}
}

@Injectable({
	providedIn: 'root',
})
export class LoginService extends BaseService<User> {
	constructor(public _http: HttpClient) {
		super(_http, API.LOGIN)
	}
}

@Injectable({
	providedIn: 'root',
})
export class LogoutService extends BaseService<User> {
	constructor(public _http: HttpClient) {
		super(_http, API.LOGOUT)
	}
}

@Injectable({
	providedIn: 'root',
})
export class MemberService extends BaseService<any> {
	constructor(public _http: HttpClient) {
		super(_http, API.ADD_MEMBER)
	}
}
@Injectable({
	providedIn: 'root',
})
export class HomeSection6Service extends BaseService<HomeSection6> {
	constructor(public _http: HttpClient) {
		super(_http, API.HOME_SECTION_6)
	}
}
