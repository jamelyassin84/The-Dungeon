import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tab } from '../../home/home.tabs';
import { WeightLiftingTabs } from './weight-lifting.tab';

@Component({
    selector: 'app-weight-lifting',
    templateUrl: './weight-lifting.component.html',
    styleUrls: ['./weight-lifting.component.scss'],
})
export class WeightLiftingComponent implements OnInit {
    constructor(private router: Router) {
        router.events.subscribe(() => this.changeTab());
    }

    ngOnInit(): void {}

    navigation: Tab[] = WeightLiftingTabs;

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
