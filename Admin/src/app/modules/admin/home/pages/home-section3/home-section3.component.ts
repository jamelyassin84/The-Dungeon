import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'app-home-section3',
	templateUrl: './home-section3.component.html',
	styleUrls: ['./home-section3.component.scss'],
})
export class HomeSection3Component implements OnInit {
	constructor() {}

	ngOnInit(): void {}

	trigger(id: string) {
		document.getElementById(id).click()
	}
}
