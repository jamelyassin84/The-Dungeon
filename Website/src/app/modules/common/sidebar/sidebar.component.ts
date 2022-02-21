import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { Router } from '@angular/router'
import { listAnimation } from 'src/app/animations/list.animation'

@Component({
	selector: 'Sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss'],
	animations: [listAnimation],
})
export class SidebarComponent implements OnInit {
	constructor(private router: Router) {}

	@Output() onAction: EventEmitter<any> = new EventEmitter()

	ngOnInit(): void {
		this.changeTab()
	}

	close() {
		this.onAction.emit(false)
	}

	activeTab: number = 1

	changeTab() {
		if (this.router.url !== '/') {
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
}
