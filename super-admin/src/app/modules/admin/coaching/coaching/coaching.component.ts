import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Tab } from '../../home/home.tabs'
import { CoachingTabs } from './coaching.tab'

@Component({
	selector: 'app-coaching',
	templateUrl: './coaching.component.html',
	styleUrls: ['./coaching.component.scss'],
})
export class CoachingComponent implements OnInit {
	constructor(private router: Router) {
		router.events.subscribe(() => this.changeTab())
	}

	ngOnInit(): void {}

	navigation: Tab[] = CoachingTabs

	activeTab: number = 1

	setActiveTab(tab: Tab) {
		this.router.navigate([tab.route])
	}

	changeTab() {
		if (this.router.url.includes('1')) {
			this.activeTab = 1
		}
		if (this.router.url.includes('2')) {
			this.activeTab = 2
		}
	}
}
