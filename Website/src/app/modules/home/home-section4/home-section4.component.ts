import { Component, OnInit } from '@angular/core'
import { HomeSection4 } from 'src/app/models/types'
import { HomeSection4Service } from 'src/app/services/api.service'

@Component({
	selector: 'homeSection4',
	templateUrl: './home-section4.component.html',
	styleUrls: ['./home-section4.component.scss'],
})
export class HomeSection4Component implements OnInit {
	constructor(private service: HomeSection4Service) {}

	ngOnInit(): void {
		this.get()
		this.innerWidth = window.innerWidth
	}

	innerWidth!: number

	data!: HomeSection4

	get(): void {
		this.service
			.index()
			.subscribe((data) =>
				data.id !== undefined ? (this.data = data) : void 0,
			)
	}
}
