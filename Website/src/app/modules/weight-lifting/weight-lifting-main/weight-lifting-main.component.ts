import { Title } from '@angular/platform-browser'
import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'app-weight-lifting-main',
	templateUrl: './weight-lifting-main.component.html',
	styleUrls: ['./weight-lifting-main.component.scss'],
})
export class WeightLiftingMainComponent implements OnInit {
	constructor(private title: Title) {}

	ngOnInit(): void {
		this.title.setTitle('The Dungeon | Competition')
	}
}
