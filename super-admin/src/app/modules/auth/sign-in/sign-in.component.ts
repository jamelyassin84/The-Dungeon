import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseAlertType } from '@fuse/components/alert';
import { AuthService } from 'app/core/auth/auth.service';

@Component({
    selector: 'auth-sign-in',
    templateUrl: './sign-in.component.html',
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations,
})
export class AuthSignInComponent implements OnInit {
    @ViewChild('signInNgForm') signInNgForm: NgForm;

    alert: { type: FuseAlertType; message: string } = {
        type: 'success',
        message: '',
    };
    signInForm: FormGroup;
    showAlert: boolean = false;

    constructor(
        private _activatedRoute: ActivatedRoute,
        private _authService: AuthService,
        private _formBuilder: FormBuilder,
        private _router: Router
    ) {}

    ngOnInit(): void {
        // Create the form
        this.signInForm = this._formBuilder.group({
            email: ['admin@gmail.com', [Validators.required, Validators.email]],
            password: ['admin', Validators.required],
            rememberMe: [''],
        });
    }

    signIn(): void {
        if (this.signInForm.invalid) {
            return;
        }

        this._router.navigate(['/']);

        // this.signInForm.disable();

        // this.showAlert = false;

        // this.signInForm.enable();

        // this.signInNgForm.resetForm();

        //  this.alert = {
        //      type: 'error',
        //      message: 'Wrong email or password',
        //  };

        //  this.showAlert = true;
    }
}
