import { Rule } from './../../../models/types'
import { Component, OnInit } from '@angular/core'
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
}
