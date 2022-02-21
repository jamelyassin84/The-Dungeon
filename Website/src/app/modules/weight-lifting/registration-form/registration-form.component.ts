import { Component, Input, OnInit } from '@angular/core'
import { listAnimation } from 'src/app/animations/list.animation'
import { AlertMessage } from 'src/app/constants/Alert'
import { MemberService } from 'src/app/services/api.service'
import * as CryptoJS from 'crypto-js'
@Component({
	selector: 'registration-form',
	templateUrl: './registration-form.component.html',
	styleUrls: ['./registration-form.component.scss'],
	animations: [listAnimation],
})
export class RegistrationFormComponent implements OnInit {
	constructor(private service: MemberService) {}

	@Input() data2: any

	ngOnInit(): void {}

	data: any = {
		email: '',
		phone: '',
		message: 'N/A',
		data: {},
	}

	file!: File | any

	src: any = undefined

	readFile(event: any): void {
		this.file = event.target.files[0] as File

		const reader = new FileReader()

		reader.readAsDataURL(this.file)

		reader.onload = (e: any) => {
			this.src = e.target.result
		}
	}

	isProcessing: boolean | 'complete' = false

	register() {
		for (let key in this.data) {
			if (this.data[key] === '') {
				return AlertMessage(
					'From: The Dungeon',
					'Make sure all fields are filled up.',
					'error',
				)
			}
		}

		for (let key in this.data.data) {
			if (this.data.data[key] === '') {
				return AlertMessage(
					'From: The Dungeon',
					'Make sure all fields are filled up.',
					'error',
				)
			}
		}

		if (this.file === undefined) {
			return AlertMessage(
				'Photo not Submitted!',
				'Please upload your photo',
				'error',
			)
		}

		this.data.data['email'] = this.data.email
		this.data.data['phone'] = this.data.phone
		this.data.data['message'] = this.data.message
		this.data['token'] = this.generateJWT(
			'2em2eRBUmRT9P5Acc7BSHP',
			'sHO3wKY/Wcd+N8B0GsogMaVTTQYX88hf7kFq8H6R',
		)
		this.isProcessing = true

		this.service.create(this.data).subscribe({
			next: (data) => {
				this.saveFile(data.id)

				this.isProcessing = false
			},
			error: () => {
				AlertMessage(
					'From: The Dungeon',
					'Service Unavailable at this moment.',
					'info',
				)

				this.isProcessing = false
			},
		})
	}

	saveFile(id: number) {
		const form = new FormData()

		form.append('file', this.file, this.file.name)

		form.append('inbox_id', id.toString())

		this.service.create(form).subscribe({
			next: () => {
				AlertMessage(
					'Registration Submitted!',
					'We are reviewing your application. Please see your email.',
					'success',
				)
			},
		})
	}

	generateJWT(key: string, secret: string) {
		const body = {
			uid: key,
			exp: Math.floor(new Date().getTime() / 1000) + 3600,
			iat: Math.floor(new Date().getTime() / 1000),
			web: true,
		}

		const header = {
			alg: 'HS256',
			typ: 'JWT',
		}
		var token = []
		token[0] = this.base64url(JSON.stringify(header))
		token[1] = this.base64url(JSON.stringify(body))
		token[2] = this.genTokenSign(token, secret)

		return token.join('.')
	}

	genTokenSign(token: any, secret: string) {
		if (token.length != 2) {
			return
		}
		var hash = CryptoJS.HmacSHA256(token.join('.'), secret)
		var base64Hash = CryptoJS.enc.Base64.stringify(hash)
		return this.urlConvertBase64(base64Hash)
	}

	base64url(input: any) {
		var base64String = btoa(input)
		return this.urlConvertBase64(base64String)
	}

	urlConvertBase64(input: any) {
		var output = input.replace(/=+$/, '')
		output = output.replace(/\+/g, '-')
		output = output.replace(/\//g, '_')

		return output
	}
}
