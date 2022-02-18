import { Component, Input, OnInit } from '@angular/core'

@Component({
	selector: 'registration-form',
	templateUrl: './registration-form.component.html',
	styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent implements OnInit {
	constructor() {}

	@Input() data2: any

	ngOnInit(): void {}
}
