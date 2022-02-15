export interface ID {
	id?: number
}
export interface DateInterface extends ID {
	created_at?: Date
	updated_at?: Date
}
export interface Coaches extends DateInterface {
	males: Coach[]
	females: Coach[]
}
export interface Coach extends DateInterface {
	name: string
	experience: string
	sex: string
	uri?: any
	src?: any
	file?: any
}
export interface Coaching extends DateInterface {
	classes: string
	price: string
}
export interface CompetitionSection1 extends DateInterface {
	isSectionEnabled: boolean
	competitionDate: string
	category: string
	categoryType: string
	hostedBy: string
	levels: string
	deadline: string
	date: string
	time: string
	uri?: string
}
export interface CompetitionSection2 extends DateInterface {
	isSectionEnabled: boolean
	smallTitle: string
	largeTitle: string
	callToActionTitle: string
	fields: RegistrationField[]
}
export interface CompetitionSection3 extends DateInterface {
	isSectionEnabled: boolean
	title: string
	body: string
	uri?: string
	participants: {
		males: Participant[]
		females: Participant[]
		wildCards: Participant[]
	}
}
export interface CompetitionSection4 extends DateInterface {
	isSectionEnabled: boolean
	isParticipantsEnabled: boolean
	title: string
	body: string
	uri?: string
}
export interface CompetitionSection5 extends DateInterface {
	isSectionEnabled: boolean
}
export interface Email extends DateInterface {
	email: string
}
export interface Footer extends DateInterface {
	isSectionEnabled: boolean
}
export interface HomePricing extends DateInterface {
	duration: string
	price: string
	billInterval: string
	summary: string
	trialPeriod: string
	backgroundColor: string
}
export interface HomeSection1 extends DateInterface {
	isSectionEnabled: boolean
	isButtonEnabled: boolean
	isTextsEnabled: boolean
	buttonText: string
	buttonColor: string
	title: string
	body: string
	uri?: string
}
export interface HomeSection2 extends DateInterface {
	isSectionEnabled: boolean
	title: string
	body: string
	uri?: string
}
export interface HomeSection3 extends DateInterface {
	isSectionEnabled: boolean
	isSliderEnabled: boolean
	title: string
	body: string
	images?: HomeSliderImage[]
}
export interface HomeSection4 extends DateInterface {
	isSectionEnabled: boolean
	isPricingEnabled: boolean
	title: string
	body: string
	notice: string
	uri?: string
	prices?: HomePricing[]
}
export interface HomeSliderImage extends DateInterface {
	uri?: string
}
export interface Inbox extends DateInterface {
	email: string
	message: string
	data: string
}
export interface Interacted extends DateInterface {
	email: string
	phone: string
}
export interface Location extends DateInterface {
	address: string
	email: string
	state: string
	contact: string
	googleMapUri?: string
	uri?: string
}
export interface OurStory extends DateInterface {
	title: string
	body: string
	images?: StoryImages[]
}
export interface Participant extends DateInterface {
	name: string
	age: string
	sex: 'males' | 'females' | 'wildCards'
	uri?: any
	src?: any
	file?: any
}
export interface RegistrationField extends DateInterface {
	fieldName: string
	value: string
	order: number
}
export interface Review extends DateInterface {
	name: string
	comment: string
	rating: number
	uri?: string
}
export interface Rule extends DateInterface {
	isSectionEnabled: boolean
	name: string
	uri?: string
	rules?: RuleValue[]
}
export interface RuleValue extends DateInterface {
	isSectionEnabled: boolean
	name: string
	data?: {
		name?: string
	}[]
}
export interface StoryImages extends DateInterface {
	uri?: string
}
export interface User extends DateInterface {
	name: string
	email: string
	facebook: string
	instagram: string
	twitter: string
	youtube: string
	password: string
	remember_token: string
	whatsApp: string
}
