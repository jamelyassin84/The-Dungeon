import {
	Component,
	ElementRef,
	HostListener,
	OnInit,
	ViewChild,
	ViewChildren,
} from '@angular/core'
import { Meta, Title } from '@angular/platform-browser'

@Component({
	selector: 'app-home-main',
	templateUrl: './home-main.component.html',
	styleUrls: ['./home-main.component.scss'],
})
export class HomeMainComponent implements OnInit {
	constructor(private title: Title, private meta: Meta) {}

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

		this.title.setTitle('The Dungeon | Home')
	}

	ngAfterViewInit(): void {
		window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth',
		})
	}
}
