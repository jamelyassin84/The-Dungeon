import { Component, Input, OnInit } from '@angular/core'
import { listAnimation } from 'src/app/animations/list.animation'

@Component({
	selector: 'registration-form',
	templateUrl: './registration-form.component.html',
	styleUrls: ['./registration-form.component.scss'],
	animations: [listAnimation],
})
export class RegistrationFormComponent implements OnInit {
	constructor() {}

	@Input() data2: any

	ngOnInit(): void {}

	register() {
		alert('Coming Soon')
	}
}
