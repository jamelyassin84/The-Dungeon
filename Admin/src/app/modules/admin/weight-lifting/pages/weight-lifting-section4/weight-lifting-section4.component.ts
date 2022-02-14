import { ReviewService } from './../../../../../services/api.service'
import { Component, OnInit } from '@angular/core'
import { Review } from 'app/models/types'
import { fuseAnimations } from '@fuse/animations'
import { listAnimation } from 'app/animations/list.animation'

@Component({
	selector: 'app-weight-lifting-section4',
	templateUrl: './weight-lifting-section4.component.html',
	styleUrls: ['./weight-lifting-section4.component.scss'],
	animations: [...fuseAnimations, listAnimation],
})
export class WeightLiftingSection4Component implements OnInit {
	constructor(private service: ReviewService) {}

	ngOnInit(): void {
		this.get()
	}

	trigger(id: string) {
		document.getElementById(id).click()
	}

	file!: File | any

	src: any = undefined

	data: Review[] = []

	add(): void {
		this.data.push({
			name: '',
			comment: '',
			rating: '',
		})
	}

	remove(index: number) {
		this.data.splice(index, 1)
	}

	get(): void {
		this.service.index().subscribe({
			next: (data: any) => {
				if (data !== null) {
					this.data = data.reverse()
				}
			},
			error: () => {
				this.isProcessing = false
			},
		})
	}

	isProcessing: boolean | 'complete' = false

	save() {
		this.service
			.create({ data: this.data })
			.subscribe((data: any) => (this.data = data.reverse()))
	}
}
