import { Title } from '@angular/platform-browser'
import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'app-coaching',
	templateUrl: './coaching.component.html',
	styleUrls: ['./coaching.component.scss'],
})
export class CoachingComponent implements OnInit {
	constructor(private title: Title) {}

	ngOnInit(): void {
		this.title.setTitle('The Dungeon | Home')
	}
}
