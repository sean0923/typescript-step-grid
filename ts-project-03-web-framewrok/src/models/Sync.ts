import axios, { AxiosPromise } from 'axios';

import { UserProps } from './User';

// const HOST = 'http://localhost:3000';

export class Sync {
	constructor(public rootURL: string) {}

	fetch(id: number): AxiosPromise {
		return axios.get(`${this.rootURL}/${id}`);
		// .then(({ data }) => {
		// 	this.data = data;
		// 	console.log('data: ', data);
		// })
		// .catch((err) => {
		// 	console.error('err: ', err);
		// });
	}

	save(data: UserProps): AxiosPromise {
		const { id } = data;
		if (id) {
			// if data is at backend -> update
			return axios.put(`${this.rootURL}/${id}`);
		}

		return axios.post(this.rootURL, data);
	}
}
