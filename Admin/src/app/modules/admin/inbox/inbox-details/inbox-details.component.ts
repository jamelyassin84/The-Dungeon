import { Location } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { fuseAnimations } from '@fuse/animations'
import { listAnimation } from 'app/animations/list.animation'
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
		private router: Router,
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
				console.log(data)
			},
		})
	}

	back() {
		this.location.back()
	}
}
