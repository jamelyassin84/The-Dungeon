import { Component, OnInit } from '@angular/core'
import { fuseAnimations } from '@fuse/animations'
import { listAnimation } from 'app/animations/list.animation'
import { AlertMessage } from 'app/constants/Alert'
import { UserService } from 'app/services/api.service'

@Component({
	selector: 'app-settings',
	templateUrl: './settings.component.html',
	styleUrls: ['./settings.component.scss'],
	animations: [...fuseAnimations, listAnimation],
})
export class Settings1Component implements OnInit {
	constructor(private service: UserService) {}

	ngOnInit(): void {
		this.get()
	}

	isProcessing: boolean | 'complete' = false

	data = {
		oldUsername: '',
		newUsername: '',
		oldPassword: '',
		newPassword: '',
		confirmPassword: '',
		facebook: '',
		instagram: '',
		twitter: '',
		youtube: '',
		whatsApp: '',
		emails: [],
	}

	get(): void {
		this.service.index().subscribe((data: any) => {
			this.data = data
			this.data.oldUsername = data.email
		})
	}

	addEmail() {
		this.data.emails.push({ email: '' })
	}

	remove(index: number) {
		this.data.emails.splice(index, 1)
	}

	save() {
		this.isProcessing = true
		if (this.data.newPassword !== this.data.confirmPassword) {
			return AlertMessage(
				`Password does'nt match!`,
				`New and Confirm Password should match.`,
				'success',
			)
		}
		this.service.create(this.data).subscribe({
			next: (data: any) => {
				this.isProcessing = false
				if (data.includes('Invalid')) {
					return AlertMessage(`Error Saving!`, data, 'error')
				}
				this.data = data
				return AlertMessage(`Account Updated!`, '', 'success')
			},
			error: () => (this.isProcessing = false),
		})
	}
}
