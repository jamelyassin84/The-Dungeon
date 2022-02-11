import { RegistrationFieldService } from './../../../../../services/api.service'
import { Component, OnInit } from '@angular/core'
import { fuseAnimations } from '@fuse/animations'
import { AlertMessage } from 'app/constants/Alert'
import { CompetitionSection2 } from 'app/models/types'
import { CompetitionSection2Service } from 'app/services/api.service'

@Component({
	selector: 'app-weight-lifting-section2',
	templateUrl: './weight-lifting-section2.component.html',
	styleUrls: ['./weight-lifting-section2.component.scss'],
	animations: fuseAnimations,
})
export class WeightLiftingSection2Component implements OnInit {
	constructor(private service: CompetitionSection2Service) {}

	ngOnInit(): void {
		this.getHomeData()
	}

	file!: File | any

	src: any = undefined

	data: CompetitionSection2 = {
		isSectionEnabled: true,
		smallTitle: '',
		largeTitle: '',
		callToActionTitle: '',
		fields: [],
	}

	addField() {
		this.data.fields.push({
			fieldName: '',
			value: '',
			order: this.data.fields.length,
		})
	}

	removeField(index: number, type: 'existing' | 'new' = 'new') {
		this.data.fields.splice(index, 1)
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

	isProcessing: boolean | 'complete' = false

	save() {
		this.isProcessing = true

		for (let key in this.data) {
			if (this.data[key] === true || this.data[key] === false) {
				this.data[key] = this.data[key] === true ? '1' : '0'
			} else {
				this.data[key] = this.data[key]
			}
		}

		this.service.create(this.data).subscribe({
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
