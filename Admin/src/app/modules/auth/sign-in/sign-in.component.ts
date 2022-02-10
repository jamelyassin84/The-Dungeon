import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core'
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { fuseAnimations } from '@fuse/animations'
import { FuseAlertType } from '@fuse/components/alert'
import { AuthService } from 'app/core/auth/auth.service'
import { LoginService } from 'app/services/api.service'

@Component({
	selector: 'auth-sign-in',
	templateUrl: './sign-in.component.html',
	encapsulation: ViewEncapsulation.None,
	animations: fuseAnimations,
})
export class AuthSignInComponent implements OnInit {
	constructor(
		private _formBuilder: FormBuilder,
		private _router: Router,
		private service: LoginService,
	) {}

	ngOnInit(): void {
		this.form = this._formBuilder.group({
			email: ['', [Validators.required]], //TODO : Validators.email
			password: ['', Validators.required],
		})
	}

	@ViewChild('signInNgForm') signInNgForm: NgForm

	alert: { type: FuseAlertType; message: string } = {
		type: 'success',
		message: '',
	}
	form: FormGroup
	showAlert: boolean = false
	isProcessing: boolean | 'complete' = false

	signIn(): void {
		this.isProcessing = true
		if (this.form.invalid) {
			this.isProcessing = false
			return
		}
		this.service.create(this.form.value).subscribe({
			next: (data: any) => {
				this.isProcessing = 'complete'
				localStorage.setItem('user', JSON.stringify(data.user))
				localStorage.setItem('token', data.token.plainTextToken)
				this._router.navigate(['/'])
			},
			error: (error) => {
				this.isProcessing = false
			},
		})
	}
}
