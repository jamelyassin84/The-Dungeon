import { Component, OnInit } from '@angular/core'
import { fuseAnimations } from '@fuse/animations'
import { listAnimation } from 'app/animations/list.animation'
import { AlertMessage } from 'app/constants/Alert'
import { Coaching } from 'app/models/types'
import { CoachingService } from 'app/services/api.service'

@Component({
	selector: 'app-coaching-section1',
	templateUrl: './coaching-section1.component.html',
	styleUrls: ['./coaching-section1.component.scss'],
	animations: [...fuseAnimations, listAnimation],
})
export class CoachingSection1Component implements OnInit {
	constructor(private service: CoachingService) {}

	ngOnInit(): void {
		this.get()
	}

	data: Coaching[] = []

	add(): void {
		this.data.push({
			price: '',
			classes: '',
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
		this.service.create({ data: this.data }).subscribe((data: any) => {
			this.data = data.reverse()
			AlertMessage(
				'Coach Pricing Updated!',
				'Refresh the Dungeon website to see the changes.',
				'success',
			)
		})
	}
}
