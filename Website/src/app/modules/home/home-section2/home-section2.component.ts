import { Component, OnInit } from '@angular/core'
import { HomeSection2 } from 'src/app/models/types'
import { HomeSection2Service } from 'src/app/services/api.service'

@Component({
	selector: 'homeSection2',
	templateUrl: './home-section2.component.html',
	styleUrls: ['./home-section2.component.scss'],
})
export class HomeSection2Component implements OnInit {
	constructor(private service: HomeSection2Service) {}

	ngOnInit(): void {
		this.get()
	}

	data!: HomeSection2

	get(): void {
		this.service.index().subscribe((data) => (this.data = data))
	}
}
