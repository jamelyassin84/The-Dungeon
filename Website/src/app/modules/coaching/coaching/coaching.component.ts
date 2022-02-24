import { Router } from '@angular/router'
import { Meta, Title } from '@angular/platform-browser'
import { Component, OnInit } from '@angular/core'
import { CoachesService, CoachingService } from 'src/app/services/api.service'
import { Coaching } from 'src/app/models/types'
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
		private meta: Meta,
	) {}

	data!: Coaching[]

	coaches!: any[]

	ngOnInit(): void {
		this.meta.addTags([
			{
				name: 'description',
				content: 'The Dungeon Gym Home',
			},
			{
				name: 'author',
				content: 'Jamel Eid Yassin',
			},
			{
				name: 'keywords',
				content:
					'Gym, Dubai Gym, Gym UAE, Weightlifting, Competition, Fitness, Dungeon, dungeon gym, bodybuilders ,powerlifters,line equipment’s, trainers, coaches, Open weightlifting ,dungeon members, contenders, coaches, coaching, classes, gym classes, gym community ',
			},
		])

		this.title.setTitle('The Dungeon | Coaching')
		this.get()
	}

	ngAfterViewInit(): void {
		window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth',
		})
	}

	get(): void {
		this.service
			.index()
			.subscribe((data: any) =>
				data?.id !== undefined || data?.id !== null
					? (this.data = data)
					: void 0,
			)

		this.coachService
			.index()
			.subscribe(
				(data: any) =>
					(this.coaches = [...data.females, ...data.males]),
			)
	}

	enroll() {
		this.router.navigate(['/competition'])
	}
}
