import { Route } from '@angular/router';
import { HomeSection2Component } from './pages/home-section2/home-section2.component';
import { HomeSection1Component } from './pages/home-section1/home-section1.component';
import { HomeSection3Component } from './pages/home-section3/home-section3.component';
import { HomeSection4Component } from './pages/home-section4/home-section4.component';
import { HomeSection5Component } from './pages/home-section5/home-section5.component';

export const HomeRoutes: Route[] = [
    {
        path: '1',
        component: HomeSection1Component,
    },
    {
        path: '2',
        component: HomeSection2Component,
    },
    {
        path: '3',
        component: HomeSection3Component,
    },

    {
        path: '4',
        component: HomeSection4Component,
    },

    {
        path: '5',
        component: HomeSection5Component,
    },
];
