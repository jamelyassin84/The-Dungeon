import { CompetitionSection3 } from './../../../models/types'
import { Component, OnInit } from '@angular/core'
import { CompetitionSection3Service } from 'src/app/services/api.service'

@Component({
	selector: 'app-weight-lifting-section4',
	templateUrl: './weight-lifting-section4.component.html',
	styleUrls: ['./weight-lifting-section4.component.scss'],
})
export class WeightLiftingSection4Component implements OnInit {
	constructor(private service: CompetitionSection3Service) {}

	ngOnInit(): void {
		this.get()
		this.innerWidth = window.innerWidth
	}
	innerWidth: number = 0

	data!: CompetitionSection3

	get(): void {
		this.service.index().subscribe((data: any) => (this.data = data))
	}
}
