import { Component, HostListener, OnInit } from '@angular/core'
import { IParallaxScrollConfig } from 'ngx-parallax-scroll'
import { HomeSection2 } from 'src/app/models/types'
import { HomeSection2Service } from 'src/app/services/api.service'

@Component({
	selector: 'homeSection2',
	templateUrl: './home-section2.component.html',
	styleUrls: ['./home-section2.component.scss'],
})
export class HomeSection2Component implements OnInit {
	constructor(private service: HomeSection2Service) {}

	ngOnInit(): void {
		this.get()
	}

	data!: HomeSection2

	get(): void {
		this.service.index().subscribe((data) => (this.data = data))
	}
	ngParallaxConf: IParallaxScrollConfig = {
		parallaxSpeed: 1,
		parallaxSmoothness: 1,
		parallaxDirection: 'reverse',
		parallaxTimingFunction: 'ease-in',
		parallaxThrottleTime: 80,
	}

	scaleNow = false
	@HostListener('window:scroll', ['$event'])
	onWindowScroll() {
		const start = 100 * 2
		const offset = 680 * 2
		console.log(window.scrollY)
		if (window.scrollY > start && window.scrollY < offset) {
			this.scaleNow = true
		} else {
			this.scaleNow = false
		}
	}
}
