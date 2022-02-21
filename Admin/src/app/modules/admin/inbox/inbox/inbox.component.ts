import { Inbox } from './../../../../models/types'
import { Component, OnInit } from '@angular/core'
import { InboxService } from 'app/services/api.service'
import { Location } from '@angular/common'
import { Fire } from 'app/constants/Alert'

@Component({
	selector: 'app-inbox',
	templateUrl: './inbox.component.html',
	styleUrls: ['./inbox.component.scss'],
})
export class InboxComponent implements OnInit {
	constructor(private service: InboxService, private location: Location) {}

	ngOnInit(): void {
		this.get()
	}

	data!: Inbox

	get() {
		this.service.index().subscribe({
			next: (data) => {
				if (data !== null) {
					this.data = data
				}
			},
			error: () => {},
		})
	}

	back() {
		this.location.back()
	}

	isProcessing: boolean | 'complete' = false

	remove(id: number) {
		Fire(
			'Do you want to remove this applicant?',
			'This will permanently deleted and will never be retrieved again.',
			'question',
			() => {
				this.service.destroy(id).subscribe(() => this.back())
			},
		)
	}
}
