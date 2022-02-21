import { Component, HostListener, Input, OnInit } from '@angular/core'
import { listAnimation } from 'src/app/animations/list.animation'
import { HomeSection3 } from 'src/app/models/types'

@Component({
	selector: 'ImagesCarousel',
	templateUrl: './home-carousel-imgs.component.html',
	styleUrls: ['./home-carousel-imgs.component.scss'],
	animations: [listAnimation],
})
export class HomeCarouselImgsComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {
		this.innerWidth = window.innerWidth
	}

	innerWidth!: number

	@Input() data!: HomeSection3

	scaleNow = false
	@HostListener('window:scroll', ['$event'])
	onWindowScroll() {
		const start = 100 * 3
		const offset = 600 * 3
		if (window.scrollY > start && window.scrollY < offset) {
			this.scaleNow = true
		} else {
			this.scaleNow = false
		}
	}
}
