import { Title } from '@angular/platform-browser'
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
	constructor(private service: OurStoryService, private title: Title) {}

	ngOnInit(): void {
		this.title.setTitle('The Dungeon | Our Story')
		this.get()
	}

	data!: OurStory

	get(): void {
		this.service.index().subscribe((data) => (this.data = data))
	}
}
