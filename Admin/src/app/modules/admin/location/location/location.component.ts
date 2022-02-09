import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'app-location',
	templateUrl: './location.component.html',
	styleUrls: ['./location.component.scss'],
})
export class LocationComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}

	trigger(id: string) {
		document.getElementById(id).click()
	}
}
