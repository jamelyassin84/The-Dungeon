import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'app-weight-lifting-second-section',
	templateUrl: './weight-lifting-second-section.component.html',
	styleUrls: ['./weight-lifting-second-section.component.scss'],
})
export class WeightLiftingSecondSectionComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}

	trigger(id: string) {
		document.getElementById(id).click()
	}
}
