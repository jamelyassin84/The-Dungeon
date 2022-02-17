import { Component, OnInit } from '@angular/core'
import { HomeSection4 } from 'src/app/models/types'
import { HomeSection4Service } from 'src/app/services/api.service'

@Component({
	selector: 'homeSection5',
	templateUrl: './home-section5.component.html',
	styleUrls: ['./home-section5.component.scss'],
})
export class HomeSection5Component implements OnInit {
	constructor(private service: HomeSection4Service) {}

	ngOnInit(): void {
		this.get()
	}

	data!: HomeSection4

	get(): void {
		this.service
			.index()
			.subscribe((data) =>
				data.id !== undefined ? (this.data = data) : void 0,
			)
	}
}
