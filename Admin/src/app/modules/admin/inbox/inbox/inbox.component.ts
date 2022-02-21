import { Inbox } from './../../../../models/types'
import { Component, OnInit } from '@angular/core'
import { InboxService } from 'app/services/api.service'

@Component({
	selector: 'app-inbox',
	templateUrl: './inbox.component.html',
	styleUrls: ['./inbox.component.scss'],
})
export class InboxComponent implements OnInit {
	constructor(private service: InboxService) {}

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
}
