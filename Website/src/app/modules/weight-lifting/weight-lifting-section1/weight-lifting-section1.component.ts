import { Component, OnInit } from '@angular/core'
import { listAnimation } from 'src/app/animations/list.animation'
import { CompetitionSection1, CompetitionSection2 } from 'src/app/models/types'
import {
	CompetitionSection1Service,
	CompetitionSection2Service,
} from 'src/app/services/api.service'
import * as moment from 'moment'
import 'moment-timezone'
@Component({
	selector: 'WeightLiftingSection1',
	templateUrl: './weight-lifting-section1.component.html',
	styleUrls: ['./weight-lifting-section1.component.scss'],
	animations: [listAnimation],
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

	time: any = undefined

	get(): void {
		this.service.index().subscribe((data) => {
			if (data?.id !== undefined || data?.id == null) {
				this.data = data
				setInterval(() => {
					this.getTimeRemaining(new Date(data.date).getTime())
				}, 1000)
			}
		})
		this.service2.index().subscribe((data) => {
			if (data?.id !== undefined) {
				this.data2 = data
			}
		})
	}

	getTimeRemaining(endTime: any) {
		moment.tz('Asia/Dubai').format()

		var now = moment(new Date(), 'Asia/Dubai')

		var end = moment(endTime)

		var duration = moment.duration(end.diff(now))

		this.time = {
			days: 0,
			hours: this.min2(duration.get('hours')),
			minutes: this.min2(duration.get('minutes')),
			seconds: this.min2(duration.get('seconds')),
			eventStarted: duration.get('minutes') < 0 ? true : false,
		}
	}

	min2(n: number) {
		return (n < 10 ? '0' : '') + n
	}
}
