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
		this.innerWidth = window.innerWidth
	}

	innerWidth!: number

	@ViewChild('section1') section1!: ElementRef
	@ViewChild('section2') section2!: ElementRef
	@ViewChild('section3') section3!: ElementRef
	@ViewChild('section4') section4!: ElementRef
	@ViewChild('section5') section5!: ElementRef

	currentSection = 1
	canScroll = true

	ngAfterViewInit() {
		this.section1.nativeElement.scrollIntoView({
			behavior: 'smooth',
			block: 'end',
			inline: 'nearest',
		})
	}

	@HostListener('window:wheel', ['$event'])
	onScroll(e: any) {
		if (this.canScroll) {
			if (e.deltaY > 0) {
				if (this.currentSection !== 5) {
					this.currentSection++
				}
			} else {
				if (this.currentSection !== 1) {
					this.currentSection--
				}
			}
			if (this.currentSection === 1) {
				this.section1.nativeElement.scrollIntoView({
					behavior: 'smooth',
					block: 'start',
				})
			}
			if (this.currentSection === 2) {
				this.section2.nativeElement.scrollIntoView({
					behavior: 'smooth',
					block: 'start',
				})
			}
			if (this.currentSection === 3) {
				this.section3.nativeElement.scrollIntoView({
					behavior: 'smooth',
					block: 'start',
				})
			}
			if (this.currentSection === 4) {
				this.section4.nativeElement.scrollIntoView({
					behavior: 'smooth',
					block: 'start',
				})
			}
			if (this.currentSection === 5) {
				this.section5.nativeElement.scrollIntoView({
					behavior: 'smooth',
					block: 'start',
				})
			}
		}
	}
}
