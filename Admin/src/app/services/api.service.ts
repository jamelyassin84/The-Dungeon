import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Coaches } from 'app/models/types'
import { BaseService } from './base.service'

@Injectable()
export class CoachesService extends BaseService<Coaches> {
	constructor(public _http: HttpClient) {
		super(_http, 'coaches')
	}
}
