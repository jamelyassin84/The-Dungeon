import { FuseNavigationItem } from './../../../@fuse/components/navigation/navigation.types'

export const adminNavigation: FuseNavigationItem[] = [
	{
		id: 'home',
		title: 'Home',
		type: 'basic',
		icon: 'heroicons_outline:home',
		link: '/home',
	},
	{
		id: 'competition',
		title: 'Competition',
		type: 'basic',
		icon: 'iconsmind:dumbbell',
		link: '/competition',
	},

	{
		id: 'location',
		title: 'Location',
		type: 'basic',
		icon: 'feather:map-pin',
		link: '/location',
	},
	{
		id: 'example',
		title: 'Coaching',
		type: 'basic',
		icon: 'feather:shield',
		link: '/coaching',
	},
	{
		id: 'example',
		title: 'Our Story',
		type: 'basic',
		icon: 'feather:heart',
		link: '/our-story',
	},
	{
		id: 'example',
		title: 'Inbox',
		type: 'basic',
		icon: 'feather:inbox',
		link: '/inbox',
	},
]
