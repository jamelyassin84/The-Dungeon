import { Component, EventEmitter, OnInit, Output } from '@angular/core'

@Component({
	selector: 'Navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
	constructor() {}
	@Output() onAction: EventEmitter<any> = new EventEmitter()

	ngOnInit(): void {}

	open() {
		this.onAction.emit(true)
	}
}
