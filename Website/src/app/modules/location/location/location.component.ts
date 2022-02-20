import { Title } from '@angular/platform-browser'
import { Component, OnInit } from '@angular/core'
import { LocationService } from 'src/app/services/api.service'
import { Location } from 'src/app/models/types'

@Component({
	selector: 'app-location',
	templateUrl: './location.component.html',
	styleUrls: ['./location.component.scss'],
})
export class LocationComponent implements OnInit {
	constructor(private service: LocationService, private title: Title) {}

	ngOnInit(): void {
		this.title.setTitle('The Dungeon | Location')
		this.get()
	}

	data!: Location

	get(): void {
		this.service.index().subscribe((data) => (this.data = data))
	}

	ngAfterViewInit(): void {
		window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth',
		})
	}
}
