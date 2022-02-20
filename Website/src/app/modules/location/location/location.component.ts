import { Meta, Title } from '@angular/platform-browser'
import { Component, OnInit } from '@angular/core'
import { LocationService } from 'src/app/services/api.service'
import { Location } from 'src/app/models/types'

@Component({
	selector: 'app-location',
	templateUrl: './location.component.html',
	styleUrls: ['./location.component.scss'],
})
export class LocationComponent implements OnInit {
	constructor(
		private service: LocationService,
		private title: Title,
		private meta: Meta,
	) {}

	ngOnInit(): void {
		this.meta.addTags([
			{
				name: 'description',
				content: 'The Dungeon Gym Home',
			},
			{
				name: 'author',
				content: 'Jamel Eid Yassin',
			},
			{
				name: 'keywords',
				content:
					'Gym, Dubai Gym, Gym UAE, Weightlifting, Competition, Fitness, Dungeon, dungeon gym, bodybuilders ,powerlifters,line equipment’s, trainers, coaches, Open weightlifting ,dungeon members, contenders, coaches, coaching, classes, gym classes, gym community ',
			},
		])

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
