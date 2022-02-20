import { Router } from '@angular/router'
import { Title } from '@angular/platform-browser'
import { Component, OnInit } from '@angular/core'
import { CoachesService, CoachingService } from 'src/app/services/api.service'
import { Coach, Coaches, Coaching } from 'src/app/models/types'
import { listAnimation } from 'src/app/animations/list.animation'

@Component({
	selector: 'app-coaching',
	templateUrl: './coaching.component.html',
	styleUrls: ['./coaching.component.scss'],
	animations: [listAnimation],
})
export class CoachingComponent implements OnInit {
	constructor(
		private service: CoachingService,
		private coachService: CoachesService,
		private title: Title,
		private router: Router,
	) {}

	ngOnInit(): void {
		this.title.setTitle('The Dungeon | Coaching')
		this.get()
	}

	data!: Coaching[]
	coaches!: any[]

	get(): void {
		this.service
			.index()
			.subscribe((data: any) => (this.data = data.reverse()))
		this.coachService
			.index()
			.subscribe(
				(data: any) =>
					(this.coaches = [...data.females, ...data.males]),
			)
	}

	ngAfterViewInit(): void {
		window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth',
		})
	}

	enroll() {
		this.router.navigate(['/competition'])
	}
}
