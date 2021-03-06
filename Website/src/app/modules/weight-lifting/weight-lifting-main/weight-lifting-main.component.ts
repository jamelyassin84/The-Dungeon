import { Meta, Title } from '@angular/platform-browser'
import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'app-weight-lifting-main',
	templateUrl: './weight-lifting-main.component.html',
	styleUrls: ['./weight-lifting-main.component.scss'],
})
export class WeightLiftingMainComponent implements OnInit {
	constructor(private title: Title, private meta: Meta) {}

	timer: any

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

		this.title.setTitle('The Dungeon | Competition')
	}
}
