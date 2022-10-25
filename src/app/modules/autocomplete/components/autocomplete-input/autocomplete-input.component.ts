import { Component, Inject, Optional } from '@angular/core';

import { AutocompleteInput } from '../../classes/autocomplete-input';
import { Autocomplete } from '../../classes/autocomplete';
import { AUTOCOMPLETE_INPUT, AutocompleteInputInterface } from '../../tokens/autocomplete-input.token';
import { AUTOCOMPLETE, AutocompleteInterface } from '../../tokens/autocomplete.token';

@Component({
	selector: 'app-autocomplete-input',
	templateUrl: './autocomplete-input.component.html',
	styleUrls: ['./autocomplete-input.component.scss'],
	providers: [
		{ provide: AutocompleteInput, useExisting: AutocompleteInputComponent },
		{ provide: AUTOCOMPLETE_INPUT, useExisting: AutocompleteInputComponent },
	],
})
export class AutocompleteInputComponent implements AutocompleteInput, AutocompleteInputInterface {
	public isLoading: boolean;
	public value = '';

	constructor(
		@Optional() private readonly autocomplete: Autocomplete,
		@Inject(AUTOCOMPLETE) @Optional() private readonly autocompleteToken: AutocompleteInterface
	) {}

	public setIsLoading(value: boolean): void {
		this.isLoading = value;
	}

	public onLoadItemsClick() {
		if (this.autocomplete) {
			this.autocomplete.loadItems(this.value);
		}

		if (this.autocompleteToken) {
			this.autocompleteToken.loadItems(this.value);
		}
	}
}
