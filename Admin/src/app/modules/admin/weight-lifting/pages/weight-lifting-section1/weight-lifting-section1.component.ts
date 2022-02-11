import { CompetitionSection1 } from './../../../../../models/types'
import { Component, OnInit } from '@angular/core'
import { CompetitionSection1Service } from 'app/services/api.service'
import { AlertMessage } from 'app/constants/Alert'
import { fuseAnimations } from '@fuse/animations'

@Component({
	selector: 'app-weight-lifting-section1',
	templateUrl: './weight-lifting-section1.component.html',
	styleUrls: ['./weight-lifting-section1.component.scss'],
	animations: fuseAnimations,
})
export class WeightLiftingSection1Component implements OnInit {
	constructor(private service: CompetitionSection1Service) {}

	ngOnInit(): void {
		this.getHomeData()
	}

	trigger(id: string) {
		document.getElementById(id).click()
	}

	file!: File | any

	src: any = undefined

	data: CompetitionSection1 = {
		isSectionEnabled: true,
		competitionDate: '',
		category: '',
		categoryType: '',
		hostedBy: '',
		levels: '',
		deadline: '',
		date: '',
		time: '',
		uri: undefined,
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
					'Competition Banner Updated!',
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
