import { Component, OnInit } from '@angular/core'
import { fuseAnimations } from '@fuse/animations'
import { listAnimation } from 'app/animations/list.animation'
import { AlertMessage, Fire } from 'app/constants/Alert'
import { Coach, Coaches } from 'app/models/types'
import { Tab } from 'app/modules/admin/home/home.tabs'
import { CoachesService } from 'app/services/api.service'
import { CoachesTabs } from './coaches.tab'

@Component({
	selector: 'app-coaching-section2',
	templateUrl: './coaching-section2.component.html',
	styleUrls: ['./coaching-section2.component.scss'],
	animations: [...fuseAnimations, listAnimation],
})
export class CoachingSection2Component implements OnInit {
	constructor(private service: CoachesService) {}

	ngOnInit(): void {
		this.get()
	}

	navigation: Tab[] = CoachesTabs

	activeTab: number = 1

	data: Coaches[] | any = {
		males: [],
		females: [],
	}

	trigger(id: string) {
		document.getElementById(id).click()
	}

	addCoach(sex: 'males' | 'females') {
		this.data[sex].push({
			sex: sex,
			name: '',
			experience: '',
			uri: undefined,
			src: undefined,
			file: undefined,
		})
	}

	get() {
		this.service.index().subscribe({
			next: (data) => {
				if (data !== null) {
					this.data = data
				}
			},
			error: () => {
				this.isProcessing = false
			},
		})
	}

	removePerson(
		index: number,
		sex: 'males' | 'females',
		id: number,
		isNew = false,
	) {
		if (isNew) {
			return Fire(
				'Remove Participant?',
				'This participant is already saved. Do you wish to continue?',
				'question',
				(data) => {
					this.service.destroy(id).subscribe(() => (this.data = data))
				},
			)
		}
		this.data[sex].splice(index, 1)
	}

	readPersonFile(event: any, index: number, sex: 'males' | 'females') {
		this.data[sex][index].uri = undefined

		this.data[sex][index].file = event.target.files[0] as File

		const reader = new FileReader()

		reader.readAsDataURL(this.data[sex][index].file)

		reader.onload = (e: any) => {
			this.data[sex][index].src = e.target.result
		}
	}

	setActiveTab(tab: Tab) {
		this.activeTab = tab.id
	}

	isProcessing: boolean | 'complete' = false

	save() {
		const contenders = ['males', 'females']

		contenders.forEach((contender: string) => {
			this.data[contender].forEach((participant: Coach) => {
				if (participant.id === undefined) {
					const form = new FormData()

					for (let key in participant) {
						form.append(key, participant[key])
					}

					if (participant.file !== undefined) {
						form.append(
							'file',
							participant.file,
							participant.file.name,
						)
					} else {
						this.isProcessing = false
						return AlertMessage(
							'Coaches not Updated!',
							'Make sure to add photo of every participant before proceeding.',
							'warning',
						)
					}

					this.service.create(form).subscribe({
						next: (data) => {
							this.data = data
						},
						error: () => {},
					})
				}
			})
		})
	}
}
