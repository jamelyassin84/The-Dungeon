import { AlertMessage } from 'app/constants/Alert'
import { Component, OnInit } from '@angular/core'
import { HomeSection4 } from 'app/models/types'
import {
	HomePricingService,
	HomeSection4Service,
} from 'app/services/api.service'
import { listAnimation } from 'app/animations/list.animation'

@Component({
	selector: 'app-home-section4',
	templateUrl: './home-section4.component.html',
	styleUrls: ['./home-section4.component.scss'],
	animations: [listAnimation],
})
export class HomeSection4Component implements OnInit {
	constructor(
		private service: HomeSection4Service,
		private pricing: HomePricingService,
	) {}

	ngOnInit(): void {
		this.getHomeData()
	}

	trigger(id: string) {
		document.getElementById(id).click()
	}

	file!: File | any

	src: any = undefined

	data: HomeSection4 = {
		isSectionEnabled: true,
		isPricingEnabled: true,
		title: '',
		notice: '',
		body: '',
		uri: ' ',
		prices: [],
	}

	getHomeData() {
		this.service.index().subscribe({
			next: (data) => {
				if (data !== null) {
					this.data = data
				}
				console.log(data)
			},
			error: () => {
				this.isProcessing = false
			},
		})
	}

	addField() {
		this.data.prices.unshift({
			duration: '',
			price: '',
			billInterval: '',
			summary: '',
			trialPeriod: '',
			backgroundColor: '',
		})
	}

	removeField(index: number) {
		this.data.prices.splice(index, 1)
	}

	readFile(event: any): void {
		this.data.uri = undefined

		this.file = event.target.files[0] as File

		const reader = new FileReader()

		reader.readAsDataURL(this.file)

		reader.onload = (e: any) => {
			this.src = e.target.result
		}
	}

	isProcessing: boolean | 'complete' = false

	save() {
		this.isProcessing = true

		const form = new FormData()

		for (let key in this.data) {
			if (this.data[key] === true || this.data[key] === false) {
				form.append(key, this.data[key] === true ? '1' : '0')
			} else {
				form.append(key, this.data[key])
			}
		}

		if (this.file !== undefined) {
			form.append('file', this.file, this.file.name)
		} else {
			form.append('url', this.data.uri)
		}

		this.service.create(form).subscribe({
			next: () => {
				this.savePricing()
			},
			error: () => {
				this.isProcessing = false
			},
		})
	}

	savePricing() {
		this.pricing.create({ prices: this.data.prices }).subscribe({
			next: () => {
				this.ngOnInit()
				AlertMessage(
					'Home Pricing Section Updated!',
					'Refresh the Dungeon website to see the changes.',
					'success',
				)
				this.isProcessing = false
			},
			error: () => {
				this.isProcessing = false
			},
		})
	}
}
