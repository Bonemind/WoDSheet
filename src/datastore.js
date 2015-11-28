import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

export class DataStore {
	constructor() {
		this.httpClient = new HttpClient({});
		this.httpClient.baseUrl = 'http://a.bonemind.nl:9001/';
	}

	loadData() {
		let skillPromise = this.httpClient.fetch('skills.json')
			.then(response => {
				return response.json();
			}).then(data => {
				console.log(data);
				this.skills = data;
			});
		return skillPromise;
	}

	loadSheet(sheet = 'wodsheet.json') {
		let sheetPromise = this.httpClient.fetch(sheet)
			.then(response => {
				return response.json();
			}).then(data => {
				return data;
			});
		return sheetPromise;
	}

}
