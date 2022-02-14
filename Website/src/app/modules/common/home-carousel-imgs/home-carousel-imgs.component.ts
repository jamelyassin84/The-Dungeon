import { Component, Input, OnInit } from '@angular/core'
import { HomeSection3 } from 'src/app/models/types'

@Component({
	selector: 'ImagesCarousel',
	templateUrl: './home-carousel-imgs.component.html',
	styleUrls: ['./home-carousel-imgs.component.scss'],
})
export class HomeCarouselImgsComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {
		this.innerWidth = window.innerWidth
	}

	innerWidth!: number

	@Input() data!: HomeSection3
}
