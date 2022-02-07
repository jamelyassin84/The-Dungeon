import { Title } from '@angular/platform-browser'
import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'app-our-story',
	templateUrl: './our-story.component.html',
	styleUrls: ['./our-story.component.scss'],
})
export class OurStoryComponent implements OnInit {
	constructor(private title: Title) {}

	ngOnInit(): void {
		this.title.setTitle('The Dungeon | Home')
	}
}
