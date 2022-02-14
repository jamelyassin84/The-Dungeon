import { Component, Input, OnInit } from '@angular/core'

@Component({
	selector: 'Community',
	templateUrl: './community.component.html',
	styleUrls: ['./community.component.scss'],
})
export class CommunityComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}

	@Input() rating!: number
	@Input() description!: string
	@Input() name!: string
}
