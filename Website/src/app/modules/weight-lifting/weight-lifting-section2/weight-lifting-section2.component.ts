import { Rule } from './../../../models/types'
import { Component, HostListener, OnInit } from '@angular/core'
import { RuleService } from 'src/app/services/api.service'

@Component({
	selector: 'WeightLiftingSection2',
	templateUrl: './weight-lifting-section2.component.html',
	styleUrls: ['./weight-lifting-section2.component.scss'],
})
export class WeightLiftingSection2Component implements OnInit {
	constructor(private service: RuleService) {}

	ngOnInit(): void {
		this.get()
	}

	data!: Rule | any
	get(): void {
		this.service.index().subscribe((data) => {
			this.data = data
		})
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
