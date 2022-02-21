import { Location } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { fuseAnimations } from '@fuse/animations'
import { listAnimation } from 'app/animations/list.animation'
import { Fire } from 'app/constants/Alert'
import { InboxService } from 'app/services/api.service'

@Component({
	selector: 'app-inbox-details',
	templateUrl: './inbox-details.component.html',
	styleUrls: ['./inbox-details.component.scss'],
	animations: [...fuseAnimations, listAnimation],
})
export class InboxDetailsComponent implements OnInit {
	constructor(
		private route: ActivatedRoute,
		private service: InboxService,
		private location: Location,
	) {}

	ngOnInit(): void {
		this.get(this.route.snapshot.paramMap.get('id'))
	}

	data!: any
	get(id: any) {
		this.service.show(id).subscribe({
			next: (data) => {
				this.data = data
			},
		})
	}

	back() {
		this.location.back()
	}

	isProcessing: boolean | 'complete' = false

	remove() {
		Fire(
			'Do you want to remove this applicant?',
			'This will permanently deleted and will never be retrieved again.',
			'question',
			() => {
				this.service.destroy(this.data.id).subscribe(() => this.back())
			},
		)
	}
}
