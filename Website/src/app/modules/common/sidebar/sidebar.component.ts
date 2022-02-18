import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { listAnimation } from 'src/app/animations/list.animation'

@Component({
	selector: 'Sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss'],
	animations: [listAnimation],
})
export class SidebarComponent implements OnInit {
	constructor() {}

	@Output() onAction: EventEmitter<any> = new EventEmitter()

	ngOnInit(): void {}

	close() {
		this.onAction.emit(false)
	}
}
