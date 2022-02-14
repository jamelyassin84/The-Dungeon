import { Component, OnInit } from '@angular/core'
import { Footer, User } from 'src/app/models/types'
import { Footer5Service, UserService } from 'src/app/services/api.service'

@Component({
	selector: 'Footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
	constructor(private service: Footer5Service, private userService: UserService) {}

	ngOnInit(): void {
		this.get()
	}

	data!: Footer
	user!: User

	get(): void {
		this.service.index().subscribe((data) => (this.data = data))
		this.userService.index().subscribe((data) => (this.user = data))
	}
}
