import { Component, ElementRef, Input, OnInit } from '@angular/core'
import { listAnimation } from 'src/app/animations/list.animation'
import { MemberService } from 'src/app/services/api.service'

@Component({
	selector: 'registration-form',
	templateUrl: './registration-form.component.html',
	styleUrls: ['./registration-form.component.scss'],
	animations: [listAnimation],
})
export class RegistrationFormComponent implements OnInit {
	constructor(private service: MemberService) {}

	@Input() data2: any

	ngOnInit(): void {}

	register() {
		this.service.create({}).subscribe({
			next: (data) => {
				console.log(data)
			},
		})
	}
}
