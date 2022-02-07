import { Component, Input, OnInit } from '@angular/core'

@Component({
	selector: 'PackageCard',
	templateUrl: './package-card.component.html',
	styleUrls: ['./package-card.component.scss'],
})
export class PackageCardComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}

	@Input() title!: string
	@Input() price!: string
	@Input() billed!: string
	@Input() priceAndInterval!: string
	@Input() freeTrial!: string
	@Input() background!: string
}
