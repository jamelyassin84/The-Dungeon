import { Component } from '@angular/core'
import { dropDownAnim } from './animations/dropdown.animation'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	animations: [dropDownAnim],
})
export class AppComponent {
	title = 'dungeon'

	showSidebar: boolean = false

	setAction(mode: boolean): void {
		this.showSidebar = mode
	}
}
