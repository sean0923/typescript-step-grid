import axios from 'axios';

const HOST = 'http://localhost:3000';

export class Sync {
	fetch() {
		axios
			.get(`${HOST}/users/${this.get('id')}`)
			.then(({ data }) => {
				this.data = data;
				console.log('data: ', data);
			})
			.catch((err) => {
				console.error('err: ', err);
			});
	}

	save() {
		const { id } = this.data;
		if (id) {
			// if data is at backend
			axios.put(`${HOST}/users/${this.data.id}`);
		} else {
			axios.post(`${HOST}/users`, this.data);
		}
	}
}
