import { trigger } from '@angular/animations'
import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'app-home-section1',
	templateUrl: './home-section1.component.html',
	styleUrls: ['./home-section1.component.scss'],
})
export class HomeSection1Component implements OnInit {
	constructor() {}

	ngOnInit(): void {}

	trigger(id: string) {
		document.getElementById(id).click()
	}
}
