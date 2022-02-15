import { Component, OnInit } from '@angular/core'
import { CompetitionSection1, CompetitionSection2 } from 'src/app/models/types'
import {
	CompetitionSection1Service,
	CompetitionSection2Service,
} from 'src/app/services/api.service'

@Component({
	selector: 'WeightLiftingSection1',
	templateUrl: './weight-lifting-section1.component.html',
	styleUrls: ['./weight-lifting-section1.component.scss'],
})
export class WeightLiftingSection1Component implements OnInit {
	constructor(
		private service: CompetitionSection1Service,
		private service2: CompetitionSection2Service,
	) {}

	ngOnInit(): void {
		this.get()
	}

	data!: CompetitionSection1
	data2!: CompetitionSection2
	time: any
	timer: any
	get(): void {
		this.service.index().subscribe((data) => {
			this.data = data
			this.countDownSinceNow(data.date, data.time)
		})
		this.service2.index().subscribe((data) => {
			this.data2 = data
		})
	}

	countDownSinceNow(date: any, time: any) {
		const timeArray = time.split(':')
		setInterval(() => {
			const endTime: any = new Date(date).getTime() / 1000
			const elapsed: any = Date.now() / 1000
			const totalSec: number = parseInt(endTime) - parseInt(elapsed)
			const h = (totalSec / 3600).toFixed()
			const m = ((totalSec / 60) % 60).toFixed()
			const s = (totalSec % 60).toFixed()
			this.time =
				this.minTwoDigits(parseInt(h)) +
				':' +
				this.minTwoDigits(m) +
				':' +
				this.minTwoDigits(s)
		}, 1000)
	}

	minTwoDigits(number: any) {
		return (number < 10 ? '0' : '') + number
	}
}
