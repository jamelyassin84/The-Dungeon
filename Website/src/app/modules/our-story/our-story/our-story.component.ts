import { Meta, Title } from '@angular/platform-browser'
import { Component, OnInit } from '@angular/core'
import { OurStoryService } from 'src/app/services/api.service'
import { OurStory, StoryImages } from 'src/app/models/types'
import { listAnimation } from 'src/app/animations/list.animation'

@Component({
	selector: 'app-our-story',
	templateUrl: './our-story.component.html',
	styleUrls: ['./our-story.component.scss'],
	animations: [listAnimation],
})
export class OurStoryComponent implements OnInit {
	constructor(
		private service: OurStoryService,
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

		this.title.setTitle('The Dungeon | Our Story')
		this.get()
	}

	data!: OurStory

	get(): void {
		this.service
			.index()
			.subscribe((data) =>
				data?.id !== undefined ? (this.data = data) : void 0,
			)
	}

	ngAfterViewInit(): void {
		window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth',
		})
	}
}
