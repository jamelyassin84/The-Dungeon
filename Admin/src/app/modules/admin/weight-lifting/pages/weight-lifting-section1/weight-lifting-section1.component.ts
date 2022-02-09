import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'app-weight-lifting-section1',
	templateUrl: './weight-lifting-section1.component.html',
	styleUrls: ['./weight-lifting-section1.component.scss'],
})
export class WeightLiftingSection1Component implements OnInit {
	constructor() {}

	ngOnInit(): void {}

	trigger(id: string) {
		document.getElementById(id).click()
	}
}
