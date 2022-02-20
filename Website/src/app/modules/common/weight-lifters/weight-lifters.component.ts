import { Component, Input, OnInit } from '@angular/core'
import { Participant } from 'src/app/models/types'

@Component({
	selector: 'WeightLifter',
	templateUrl: './weight-lifters.component.html',
	styleUrls: ['./weight-lifters.component.scss'],
})
export class WeightLiftersComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}

	@Input() participant!: Participant

	ngAfterViewInit(): void {
		window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth',
		})
	}
}
