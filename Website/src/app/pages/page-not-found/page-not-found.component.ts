import { Component, OnInit } from '@angular/core'
import { Meta, Title } from '@angular/platform-browser'

@Component({
	selector: 'app-page-not-found',
	templateUrl: './page-not-found.component.html',
	styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent implements OnInit {
	constructor(private title: Title, private meta: Meta) {}

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

		this.title.setTitle('The Dungeon | Page Not Found')
	}
}
