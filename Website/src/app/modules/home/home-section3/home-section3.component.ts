import { Component, HostListener, OnInit } from '@angular/core'
import { HomeSection3 } from 'src/app/models/types'
import { HomeSection3Service } from 'src/app/services/api.service'

@Component({
	selector: 'homeSection3',
	templateUrl: './home-section3.component.html',
	styleUrls: ['./home-section3.component.scss'],
})
export class HomeSection3Component implements OnInit {
	constructor(private service: HomeSection3Service) {}

	ngOnInit(): void {
		this.get()
	}

	data!: HomeSection3 | any

	get(): void {
		this.service
			.index()
			.subscribe((data) =>
				data.id !== undefined ? (this.data = data) : void 0,
			)
	}

	scaleNow = false
	@HostListener('window:scroll', ['$event'])
	onWindowScroll() {
		const start = 100 * 3
		const offset = 680 * 3
		if (window.scrollY > start && window.scrollY < offset) {
			this.scaleNow = true
		} else {
			this.scaleNow = false
		}
	}
}
