import { Component, OnInit } from '@angular/core'
import { HomeSection3 } from 'src/app/models/types'
import { HomeSection3Service } from 'src/app/services/api.service'

@Component({
	selector: 'homeSection3',
	templateUrl: './home-section3.component.html',
	styleUrls: ['./home-section3.component.scss'],
})
export class HomeSection3Component implements OnInit {
	constructor(private service: HomeSection3Service) {}

	ngOnInit(): void {
		this.get()
	}

	data!: HomeSection3 | any

	get(): void {
		this.service.index().subscribe((data) => (this.data = data))
	}
}
