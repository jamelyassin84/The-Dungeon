import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { Router } from '@angular/router'

@Component({
	selector: 'Navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
	constructor(private router: Router) {
		router.events.subscribe(() => this.changeTab())
	}
	@Output() onAction: EventEmitter<any> = new EventEmitter()

	ngOnInit(): void {}

	activeTab: number = 0

	open() {
		this.onAction.emit(true)
	}

	changeTab() {
		if (this.router.url.includes('home')) {
			this.activeTab = 1
		}
		if (this.router.url.includes('competition')) {
			this.activeTab = 2
		}
		if (this.router.url.includes('location')) {
			this.activeTab = 3
		}
		if (this.router.url.includes('coaching')) {
			this.activeTab = 4
		}
		if (this.router.url.includes('our-story')) {
			this.activeTab = 5
		}
	}
}
