import { Injectable } from '@angular/core'
import { assign, cloneDeep } from 'lodash-es'
import { FuseMockApiService, FuseMockApiUtils } from '@fuse/lib/mock-api'
import { notifications as notificationsData } from 'app/mock-api/common/notifications/data'

@Injectable({
	providedIn: 'root',
})
export class NotificationsMockApi {
	private _notifications: any = notificationsData

	constructor(private _fuseMockApiService: FuseMockApiService) {
		this.registerHandlers()
	}

	registerHandlers(): void {
		this._fuseMockApiService
			.onGet('api/common/notifications')
			.reply(() => [200, cloneDeep(this._notifications)])

		this._fuseMockApiService
			.onPost('api/common/notifications')
			.reply(({ request }) => {
				const newNotification = cloneDeep(request.body.notification)

				newNotification.id = FuseMockApiUtils.guid()

				this._notifications.unshift(newNotification)

				return [200, newNotification]
			})

		this._fuseMockApiService
			.onPatch('api/common/notifications')
			.reply(({ request }) => {
				const id = request.body.id
				const notification = cloneDeep(request.body.notification)

				let updatedNotification = null

				this._notifications.forEach(
					(item: any, index: number, notifications: any[]) => {
						if (item.id === id) {
							notifications[index] = assign(
								{},
								notifications[index],
								notification,
							)

							updatedNotification = notifications[index]
						}
					},
				)

				return [200, updatedNotification]
			})

		this._fuseMockApiService
			.onDelete('api/common/notifications')
			.reply(({ request }) => {
				const id = request.params.get('id')

				let deletedNotification = null

				const index = this._notifications.findIndex(
					(item: any) => item.id === id,
				)

				deletedNotification = cloneDeep(this._notifications[index])

				this._notifications.splice(index, 1)

				return [200, deletedNotification]
			})

		this._fuseMockApiService
			.onGet('api/common/notifications/mark-all-as-read')
			.reply(() => {
				this._notifications.forEach(
					(item: any, index: number, notifications: any[]) => {
						notifications[index].read = true
						notifications[index].seen = true
					},
				)

				return [200, true]
			})

		this._fuseMockApiService
			.onPost('api/common/notifications/toggle-read-status')
			.reply(({ request }) => {
				const notification = cloneDeep(request.body.notification)

				let updatedNotification = null

				this._notifications.forEach(
					(item: any, index: number, notifications: any[]) => {
						if (item.id === notification.id) {
							notifications[index].read = notification.read

							updatedNotification = notifications[index]
						}
					},
				)

				return [200, updatedNotification]
			})
	}
}
