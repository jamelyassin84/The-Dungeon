import { Injectable } from '@angular/core'
import { cloneDeep } from 'lodash-es'
import {
	FuseNavigationItem,
	FuseNavigationService,
} from '@fuse/components/navigation'
import { FuseMockApiService } from '@fuse/lib/mock-api'
import { defaultNavigation } from 'app/mock-api/common/navigation/data'
import { contacts } from 'app/mock-api/apps/contacts/data'
import { tasks } from 'app/mock-api/apps/tasks/data'

@Injectable({
	providedIn: 'root',
})
export class SearchMockApi {
	private readonly _defaultNavigation: FuseNavigationItem[] =
		defaultNavigation
	private readonly _contacts: any[] = contacts
	private readonly _tasks: any[] = tasks

	constructor(
		private _fuseMockApiService: FuseMockApiService,
		private _fuseNavigationService: FuseNavigationService,
	) {
		this.registerHandlers()
	}

	registerHandlers(): void {
		const flatNavigation = this._fuseNavigationService.getFlatNavigation(
			this._defaultNavigation,
		)

		this._fuseMockApiService
			.onPost('api/common/search')
			.reply(({ request }) => {
				const query = cloneDeep(request.body.query.toLowerCase())

				if (query === '') {
					return [200, { results: [] }]
				}

				const contactsResults = cloneDeep(this._contacts).filter(
					(contact) => contact.name.toLowerCase().includes(query),
				)

				const pagesResults = cloneDeep(flatNavigation).filter(
					(page) =>
						page.title?.toLowerCase().includes(query) ||
						(page.subtitle && page.subtitle.includes(query)),
				)

				const tasksResults = cloneDeep(this._tasks).filter((task) =>
					task.title.toLowerCase().includes(query),
				)

				const results = []

				if (contactsResults.length > 0) {
					contactsResults.forEach((result) => {
						result.link = '/apps/contacts/' + result.id
					})

					results.push({
						id: 'contacts',
						label: 'Contacts',
						results: contactsResults,
					})
				}

				if (pagesResults.length > 0) {
					pagesResults.forEach((result: any) => {})

					results.push({
						id: 'pages',
						label: 'Pages',
						results: pagesResults,
					})
				}

				if (tasksResults.length > 0) {
					tasksResults.forEach((result) => {
						result.link = '/apps/tasks/' + result.id
					})

					results.push({
						id: 'tasks',
						label: 'Tasks',
						results: tasksResults,
					})
				}

				return [200, results]
			})
	}
}
