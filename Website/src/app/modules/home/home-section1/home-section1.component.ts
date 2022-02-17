import { HomeSection1Service } from './../../../services/api.service'
import { Component, OnInit } from '@angular/core'
import { HomeSection1 } from 'src/app/models/types'

@Component({
	selector: 'homeSection1',
	templateUrl: './home-section1.component.html',
	styleUrls: ['./home-section1.component.scss'],
})
export class HomeSection1Component implements OnInit {
	constructor(private service: HomeSection1Service) {}

	ngOnInit(): void {
		this.get()
	}

	data!: HomeSection1

	get(): void {
		this.service
			.index()
			.subscribe((data) =>
				data.id !== undefined ? (this.data = data) : void 0,
			)
	}
}
