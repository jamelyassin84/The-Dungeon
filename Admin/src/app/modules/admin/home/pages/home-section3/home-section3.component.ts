import { Component, OnInit } from '@angular/core'
import { AlertMessage, Fire } from 'app/constants/Alert'
import { HomeSection3 } from 'app/models/types'
import { HomeSection3Service } from 'app/services/api.service'

@Component({
	selector: 'app-home-section3',
	templateUrl: './home-section3.component.html',
	styleUrls: ['./home-section3.component.scss'],
})
export class HomeSection3Component implements OnInit {
	constructor(private service: HomeSection3Service) {}

	ngOnInit(): void {
		this.getHomeData()
	}

	trigger(id: string) {
		document.getElementById(id).click()
	}

	files: File[] | any

	images: any[] = []

	data: HomeSection3 = {
		isSectionEnabled: true,
		isSliderEnabled: true,
		title: '',
		body: '',
		images: [],
	}

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

	readFiles(event: any) {
		this.images = []
		this.files = event.target.files as File[]
		Array.from(this.files).forEach((file: File) => {
			const reader = new FileReader()
			reader.onload = () => {
				this.images.push(String(reader.result))
			}
			reader.readAsDataURL(file)
		})
	}

	isProcessing: boolean | 'complete' = false

	save() {
		this.isProcessing = true

		const form = new FormData()

		delete this.data.images

		for (let key in this.data) {
			form.append(key, this.data[key])
		}

		if (this.files !== undefined) {
			for (var i = 0; i < this.files.length; i++) {
				form.append('file' + i, this.files[i])
			}

			form.append('length', this.files.length)
		}

		this.service.create(form).subscribe({
			next: (data) => {
				this.clearFiles()

				this.data = data

				this.isProcessing = false

				AlertMessage(
					'Home Section 3 Updated!',
					'Refresh the Dungeon website to see the changes.',
					'success',
				)
			},
			error: (error) => {
				this.isProcessing = false
			},
			complete: () => {
				this.isProcessing = false
			},
		})
	}

	remove(id: number) {
		Fire(
			'This will remove the image.',
			'Do you want to continue?',
			'question',
			() => {
				this.service.destroy(id).subscribe(() => this.ngOnInit())
			},
		)
	}

	clearFiles() {
		this.images = []

		this.files = undefined
	}
}
