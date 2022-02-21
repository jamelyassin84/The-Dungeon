import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { HomeTabs, Tab } from '../home.tabs'

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
	constructor(private router: Router) {
		router.events.subscribe(() => this.changeTab())
	}

	ngOnInit(): void {}

	navigation: Tab[] = HomeTabs

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
		if (this.router.url.includes('3')) {
			this.activeTab = 3
		}
		if (this.router.url.includes('4')) {
			this.activeTab = 4
		}
		if (this.router.url.includes('5')) {
			this.activeTab = 5
		}
		if (this.router.url.includes('6')) {
			this.activeTab = 6
		}
	}
}
