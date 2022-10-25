import { Component } from '@angular/core';

import { AutocompleteList } from '../../classes/autocomplete-list';
import { AUTOCOMPLETE_LIST, AutocompleteListInterface } from '../../tokens/autocomplete-list.token';

@Component({
	selector: 'app-autocomplete-list',
	templateUrl: './autocomplete-list.component.html',
	styleUrls: ['./autocomplete-list.component.scss'],
	providers: [
		{ provide: AutocompleteList, useExisting: AutocompleteListComponent },
		{ provide: AUTOCOMPLETE_LIST, useExisting: AutocompleteListComponent },
	],
})
export class AutocompleteListComponent implements AutocompleteList, AutocompleteListInterface {
	public items: any;

	constructor() {}

	public setItems(items: any): void {
		this.items = items;
	}
}
