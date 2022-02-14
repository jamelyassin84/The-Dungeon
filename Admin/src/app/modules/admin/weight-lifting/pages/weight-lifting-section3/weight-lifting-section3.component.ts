import { Participant } from './../../../../../models/types'
import { fuseAnimations } from './../../../../../../@fuse/animations/public-api'
import { AlertMessage, Fire } from 'app/constants/Alert'
import {
	CompetitionSection3Service,
	ParticipantService,
} from './../../../../../services/api.service'
import { Component, OnInit } from '@angular/core'
import { CompetitionSection3 } from 'app/models/types'
import { ParticipantTabs } from './participants.tabs'
import { Tab } from 'app/modules/admin/home/home.tabs'
import { listAnimation } from 'app/animations/list.animation'

@Component({
	selector: 'app-weight-lifting-section3',
	templateUrl: './weight-lifting-section3.component.html',
	styleUrls: ['./weight-lifting-section3.component.scss'],
	animations: [...fuseAnimations, listAnimation],
})
export class WeightLiftingSection3Component implements OnInit {
	constructor(
		private service: CompetitionSection3Service,
		private participantService: ParticipantService,
	) {}

	ngOnInit(): void {
		this.getHomeData()
	}

	trigger(id: string) {
		document.getElementById(id).click()
	}

	navigation: Tab[] = ParticipantTabs

	file!: File | any

	src: any = undefined

	data: CompetitionSection3 = {
		isSectionEnabled: false,
		title: '',
		body: '',
		uri: undefined,
		participants: {
			males: [],
			females: [],
			wildCards: [],
		},
	}

	activeTab: number = 1

	setActiveTab(tab: Tab) {
		this.activeTab = tab.id
	}

	addParticipant(sex: 'males' | 'females' | 'wildCards' = 'wildCards') {
		this.data.participants[sex].unshift({
			sex: sex,
			name: '',
			age: '',
			uri: undefined,
			src: undefined,
			file: undefined,
		})
	}

	getHomeData() {
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

	readPersonFile(
		event: any,
		index: number,
		sex: 'males' | 'females' | 'wildCards',
	) {
		this.data.participants[sex][index].uri = undefined

		this.data.participants[sex][index].file = event.target.files[0] as File

		const reader = new FileReader()

		reader.readAsDataURL(this.data.participants[sex][index].file)

		reader.onload = (e: any) => {
			this.data.participants[sex][index].src = e.target.result
		}
	}

	removePerson(
		index: number,
		sex: 'males' | 'females' | 'wildCards',
		id: number,
		isNew = false,
	) {
		if (isNew) {
			return Fire(
				'Remove Participant?',
				'This participant is already saved. Do you wish to continue?',
				'question',
				() => {
					this.participantService
						.destroy(id)
						.subscribe(() => this.ngOnInit())
				},
			)
		}
		this.data.participants[sex].splice(index, 1)
	}

	readFile(event: any): void {
		this.data.uri = undefined

		this.file = event.target.files[0] as File

		const reader = new FileReader()

		reader.readAsDataURL(this.file)

		reader.onload = (e: any) => {
			this.src = e.target.result
		}
	}

	isProcessing: boolean | 'complete' = false

	save() {
		this.isProcessing = true

		const form = new FormData()

		for (let key in this.data) {
			if (this.data[key] === true || this.data[key] === false) {
				form.append(key, this.data[key] === true ? '1' : '0')
			} else {
				form.append(key, this.data[key])
			}
		}

		if (this.file !== undefined) {
			form.append('file', this.file, this.file.name)
		} else {
			form.append('url', this.data.uri)
		}

		this.service.create(form).subscribe({
			next: () => {
				this.isProcessing = false
				AlertMessage(
					'Updated!',
					'Refresh the Dungeon website to see the changes.',
					'success',
				)
				this.saveParticipants()
			},
			error: () => {
				this.isProcessing = false
			},
		})
	}

	saveParticipants() {
		const contenders = ['males', 'females', 'wildCards']

		contenders.forEach((contender: string) => {
			this.data.participants[contender].forEach(
				(participant: Participant) => {
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
								'Participants not Updated!',
								'Make sure to add photo of every participant before proceeding.',
								'warning',
							)
						}

						this.participantService.create(form).subscribe({
							next: () => {
								this.ngOnInit()
							},
							error: () => {},
						})
					}
				},
			)
		})
	}
}
