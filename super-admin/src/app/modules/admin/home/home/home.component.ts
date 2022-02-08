import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeTabs, Tab } from '../home.tabs';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    constructor(private router: Router) {
        router.events.subscribe(() => this.changeTab());
    }

    ngOnInit(): void {}

    navigation: Tab[] = HomeTabs;

    activeTab: number = 1;

    setActiveTab(tab: Tab) {
        this.router.navigate([tab.route]);
    }

    changeTab() {
        // if (this.router.url.includes('overview')) {
        //     this.activeTab = 1;
        // }
        // if (this.router.url.includes('analytics')) {
        //     this.activeTab = 2;
        // }
    }
}
