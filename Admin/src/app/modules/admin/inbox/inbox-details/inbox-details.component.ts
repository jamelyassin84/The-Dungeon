import { Component, OnInit } from '@angular/core'
import { fuseAnimations } from '@fuse/animations'
import { listAnimation } from 'app/animations/list.animation'

@Component({
	selector: 'app-inbox-details',
	templateUrl: './inbox-details.component.html',
	styleUrls: ['./inbox-details.component.scss'],
	animations: [...fuseAnimations, listAnimation],
})
export class InboxDetailsComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
