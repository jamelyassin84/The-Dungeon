import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Inject, Injectable, Optional } from '@angular/core'
import { environment } from 'environments/environment'
import { Observable } from 'rxjs'

@Injectable({
	providedIn: 'root',
})
export class BaseService<T> {
	constructor(
		public http: HttpClient,
		@Inject('url') public url: String = '',
	) {}

	headers() {
		let token = localStorage.getItem('token')
		let headers: any = {
			Accept: 'application/json',
			'Access-Control-Allow-Origin': '*',
			Authorization: 'Bearer ' + token,
		}
		if (token === null) {
			delete headers['Authorization']
		}
		return {
			headers: new HttpHeaders(headers),
		}
	}

	paginate(url: string): Observable<T> {
		return this.http.get<T>(url, this.headers())
	}

	index(): Observable<T> {
		const url = `${environment.api}${this.url}`
		return this.http.get<any>(url, this.headers())
	}

	show(id: Number | string): Observable<T> {
		const url = `${environment.api}${this.url}/${id}`
		return this.http.get<T>(url, this.headers())
	}

	create(data: Object): Observable<T> {
		const url = `${environment.api}${this.url}`
		return this.http.post<T>(url, data, this.headers())
	}

	update(id: Number, data: Object): Observable<T> {
		const url = `${environment.api}${this.url}/${id}`
		return this.http.patch<T>(url, data, this.headers())
	}

	destroy(id: Number): Observable<T> {
		const url = `${environment.api}${this.url}/${id}`
		return this.http.delete<T>(url, this.headers())
	}
}
