import { Title } from '@angular/platform-browser'
import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'app-location',
	templateUrl: './location.component.html',
	styleUrls: ['./location.component.scss'],
})
export class LocationComponent implements OnInit {
	constructor(private title: Title) {}

	ngOnInit(): void {
		this.title.setTitle('The Dungeon | Location')
	}
}
