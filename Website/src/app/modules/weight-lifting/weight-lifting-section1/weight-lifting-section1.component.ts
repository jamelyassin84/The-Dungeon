import { Component, OnInit } from '@angular/core'
import { CompetitionSection1 } from 'src/app/models/types'
import { CompetitionSection1Service } from 'src/app/services/api.service'

@Component({
	selector: 'WeightLiftingSection1',
	templateUrl: './weight-lifting-section1.component.html',
	styleUrls: ['./weight-lifting-section1.component.scss'],
})
export class WeightLiftingSection1Component implements OnInit {
	constructor(private service: CompetitionSection1Service) {}

	ngOnInit(): void {
		this.get()
	}

	data!: CompetitionSection1

	get(): void {
		this.service.index().subscribe((data) => (this.data = data))
	}
}
