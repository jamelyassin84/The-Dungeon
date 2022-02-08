export const HomeTabs: Tab[] = [
    {
        id: 1,
        name: 'HOME BANNER',
        route: '/home/1',
    },
    {
        id: 2,
        name: 'SECTION II',
        route: '/home/2',
    },
    {
        id: 3,
        name: 'SLIDING IMAGES',
        route: '/home/3',
    },
    {
        id: 4,
        name: 'PRICING SECTION',
        route: '/home/4',
    },
    {
        id: 5,
        name: 'FOOTER BANNER',
        route: '/home/5',
    },
];

export interface Tab {
    id: number;
    name: string;
    route: string;
}
