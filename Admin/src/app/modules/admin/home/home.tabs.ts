export const HomeTabs: Tab[] = [
	{
		id: 1,
		name: 'HOME BANNER',
		route: '/home/1',
	},
	{
		id: 2,
		name: 'MERCHANDISE',
		route: '/home/2',
	},
	{
		id: 3,
		name: 'iNTRODUCTORY',
		route: '/home/2',
	},
	{
		id: 4,
		name: 'PARTICIPANTS',
		route: '/home/3',
	},
	{
		id: 5,
		name: 'THE GYM',
		route: '/home/3',
	},
	{
		id: 6,
		name: 'PRICING',
		route: '/home/4',
	},
	{
		id: 7,
		name: 'LAST SECTION',
		route: '/home/6',
	},
	{
		id: 8,
		name: 'FOOTER ',
		route: '/home/5',
	},
]

export interface Tab {
	id: number
	name: string
	route: string
}
