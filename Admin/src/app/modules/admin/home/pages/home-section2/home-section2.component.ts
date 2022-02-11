import { HomeSection2 } from './../../../../../models/types'
import { Component, OnInit } from '@angular/core'
import { AlertMessage } from 'app/constants/Alert'
import { HomeSection2Service } from 'app/services/api.service'

@Component({
	selector: 'app-home-section2',
	templateUrl: './home-section2.component.html',
	styleUrls: ['./home-section2.component.scss'],
})
export class HomeSection2Component implements OnInit {
	constructor(private service: HomeSection2Service) {}

	ngOnInit(): void {
		this.getHomeData()
	}

	trigger(id: string) {
		document.getElementById(id).click()
	}

	file!: File | any

	src: any = undefined

	data: HomeSection2 = {
		isSectionEnabled: true,
		title: '',
		body: '',
	}

	getHomeData() {
		this.service.index().subscribe({
			next: (data) => {
				if (data !== null) {
					this.data = data
				}
			},
		})
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
			next: (data) => {
				this.data = data
				this.isProcessing = false
				AlertMessage(
					'Home Section 2 Updated!',
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
