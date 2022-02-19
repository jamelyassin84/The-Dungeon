import {
	Directive,
	ElementRef,
	HostBinding,
	HostListener,
	Input,
	Renderer2,
} from '@angular/core'

@Directive({
	selector: '[appParallax]',
})
export class ParallaxDirective {
	@Input('factor') set parallaxFactor(val: any) {
		this.factor = val ? val : 1
	}

	@HostBinding('style.transform')
	scroll: any = ''

	private factor!: number

	constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

	@HostListener('window:scroll', ['$event'])
	onWindowScroll() {
		this.scroll = ` translateY(${this.getTranslation()}px)`
	}

	private getTranslation() {
		return (window.scrollY * this.factor) / 10
	}
}
