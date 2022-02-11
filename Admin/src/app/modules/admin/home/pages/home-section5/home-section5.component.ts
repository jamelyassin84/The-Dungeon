import { Component, OnInit } from '@angular/core'
import { AlertMessage } from 'app/constants/Alert'
import { Footer } from 'app/models/types'
import { Footer5Service } from 'app/services/api.service'

@Component({
	selector: 'app-home-section5',
	templateUrl: './home-section5.component.html',
	styleUrls: ['./home-section5.component.scss'],
})
export class HomeSection5Component implements OnInit {
	constructor(private service: Footer5Service) {}

	ngOnInit(): void {
		this.getHomeData()
	}

	data: Footer = {
		isSectionEnabled: true,
	}

	isProcessing: boolean | 'complete' = false

	getHomeData() {
		this.service.index().subscribe({
			next: (data) => {
				if (data !== null) {
					this.data = data
				}
			},
			error: () => {
				this.isProcessing = false
			},
		})
	}

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

		this.service.create(form).subscribe({
			next: (data) => {
				this.data = data
				this.isProcessing = false
				AlertMessage(
					'Footer Updated!',
					'Refresh the Dungeon website to see the changes.',
					'success',
				)
			},
			error: () => {
				this.isProcessing = false
			},
		})
	}
}
