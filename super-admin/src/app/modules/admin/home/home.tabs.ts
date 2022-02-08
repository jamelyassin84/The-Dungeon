export const HomeTabs: Tab[] = [
    {
        id: 1,
        name: 'HOME BANNER',
        route: '',
    },
    {
        id: 2,
        name: 'SECTION II',
        route: '',
    },
    {
        id: 3,
        name: 'SLIDING IMAGES',
        route: '',
    },
    {
        id: 4,
        name: 'PRICING SECTION',
        route: '',
    },
    {
        id: 5,
        name: 'FOOTER BANNER',
        route: '',
    },
];

export interface Tab {
    id: number;
    name: string;
    route: string;
}
