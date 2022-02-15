import { Component, OnInit } from '@angular/core'
import { CompetitionSection3, Review } from 'src/app/models/types'
import {
	CompetitionSection3Service,
	ReviewService,
} from 'src/app/services/api.service'

@Component({
	selector: 'WeightLiftingSection3',
	templateUrl: './weight-lifting-section3.component.html',
	styleUrls: ['./weight-lifting-section3.component.scss'],
})
export class WeightLiftingSection3Component implements OnInit {
	constructor(private service: ReviewService) {}

	ngOnInit(): void {
		this.get()
		this.innerWidth = window.innerWidth
	}
	innerWidth: number = 0
	data!: Review[]

	get(): void {
		this.service.index().subscribe((data: any) => (this.data = data))
	}
}
