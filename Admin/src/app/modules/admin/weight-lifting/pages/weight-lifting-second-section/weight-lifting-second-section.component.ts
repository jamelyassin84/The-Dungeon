import { Component, OnInit } from '@angular/core'
import { fuseAnimations } from '@fuse/animations'
import { listAnimation } from 'app/animations/list.animation'
import { AlertMessage } from 'app/constants/Alert'
import { Rule } from 'app/models/types'
import { RuleService } from 'app/services/api.service'

@Component({
	selector: 'app-weight-lifting-second-section',
	templateUrl: './weight-lifting-second-section.component.html',
	styleUrls: ['./weight-lifting-second-section.component.scss'],
	animations: [...fuseAnimations, listAnimation],
})
export class WeightLiftingSecondSectionComponent implements OnInit {
	constructor(private service: RuleService) {}

	ngOnInit(): void {
		this.getHomeData()
	}

	trigger(id: string) {
		document.getElementById(id).click()
	}

	file!: File | any

	src: any = undefined

	data: Rule = {
		isSectionEnabled: true,
		name: '',
		uri: undefined,
	}

	getHomeData() {
		this.service.index().subscribe({
			next: (data) => {
				if (data.created_at !== undefined) {
					this.data = data
				}
				console.log(this.data)
				if (data.rules.length === 0) {
					this.addInitialRule()
				}
			},
		})
	}

	readFile(event: any): void {
		this.file = event.target.files[0] as File

		const reader = new FileReader()

		reader.readAsDataURL(this.file)

		reader.onload = (e: any) => {
			this.src = e.target.result
		}
	}

	addInitialRule() {
		this.data.rules = []
		const rulesFor = ['General', 'Male', 'Female']
		rulesFor.forEach((rule) =>
			this.data.rules.push({
				isSectionEnabled: true,
				name: rule,
				data: [],
			}),
		)
	}

	addRule(index: number) {
		this.data.rules[index].data.push({
			name: '',
		})
	}

	removeRule(ruleIndex: number, dataIndex: number) {
		this.data.rules[ruleIndex].data.splice(dataIndex, 1)
	}

	isProcessing: boolean | 'complete' = false

	save() {
		this.isProcessing = true

		for (let key in this.data) {
			if (this.data[key] === true || this.data[key] === false) {
				this.data[key] = this.data[key] === true ? '1' : '0'
			} else {
				this.data[key] = this.data[key]
			}
		}

		this.service.create(this.data).subscribe({
			next: (data) => {
				this.isProcessing = false
				this.saveFile()
				this.data = data
				AlertMessage(
					'Rules Updated!',
					'Refresh the Dungeon website to see the changes.',
					'success',
				)
			},
			error: () => {
				this.isProcessing = false
			},
		})
	}

	saveFile() {
		const form = new FormData()

		if (this.file !== undefined) {
			form.append('file', this.file, this.file.name)
		} else {
			form.append('url', this.data.uri)
		}

		this.service.create(form).subscribe({
			next: (data) => {
				this.data = data
			},
		})
	}
}
