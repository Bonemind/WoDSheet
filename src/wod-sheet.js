import 'fetch';
import {inject} from 'aurelia-framework';
import {DataStore} from './datastore';

@inject(DataStore)
export class WodSheet {
	heading = "Sheet";
	constructor(dataStore) {
		this.dataStore = dataStore;
	}

	activate() {
		let sheetPromise = this.dataStore.loadSheet()
			.then(sheet => {
				this.sheet = sheet;
			});
		return Promise.all([this.dataStore.loadData(), sheetPromise])
			.then(() => {
				console.log('afterall');
				console.log(this.dataStore);
				this.dataStore.skills.skills.forEach((skillgroup) => {
					console.log(skillgroup.name);
					if (!this.sheet.skills[skillgroup.name]) {
						this.sheet.skills[skillgroup.name] = {};
					}
					skillgroup.skills.forEach((skill) => {
						console.log(skill);
						if (!this.sheet.skills[skillgroup.name][skill]) {
							this.sheet.skills[skillgroup.name][skill] = {score: 0, specialties: ''};
						}
					});
				});
			});
	}

	debugSheet() {
		console.log(this.sheet);
		console.log(this.dataStore.skills);
	}
}
