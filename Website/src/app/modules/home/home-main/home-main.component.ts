import {
	Component,
	ElementRef,
	HostListener,
	OnInit,
	ViewChild,
	ViewChildren,
} from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
	selector: 'app-home-main',
	templateUrl: './home-main.component.html',
	styleUrls: ['./home-main.component.scss'],
})
export class HomeMainComponent implements OnInit {
	constructor(private title: Title) {}

	ngOnInit(): void {
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
