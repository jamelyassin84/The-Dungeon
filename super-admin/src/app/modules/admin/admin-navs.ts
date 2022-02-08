import { FuseNavigationItem } from './../../../@fuse/components/navigation/navigation.types';

export const adminNavigation: FuseNavigationItem[] = [
    {
        id: 'home',
        title: 'Home',
        type: 'basic',
        icon: 'heroicons_outline:home',
        link: '/example',
    },
    {
        id: 'weight0lifting',
        title: 'Weight Lifting',
        type: 'basic',
        icon: 'iconsmind:dumbbell',
        link: '/example',
    },

    {
        id: 'location',
        title: 'Location',
        type: 'basic',
        icon: 'feather:map-pin',
        link: '/example',
    },
    {
        id: 'example',
        title: 'Coaching',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/example',
    },
    {
        id: 'example',
        title: 'Our Story',
        type: 'basic',
        icon: 'feather:clock',
        link: '/example',
    },
    {
        id: 'example',
        title: 'Inbox',
        type: 'basic',
        icon: 'feather:inbox',
        link: '/example',
    },
];
