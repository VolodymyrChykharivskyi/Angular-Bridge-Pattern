import { Component, ViewChild } from '@angular/core';
import { Autocomplete } from '../autocomplete/classes/autocomplete';
import { AutocompleteModule } from '../autocomplete/autocomplete.module';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs';
import { AUTOCOMPLETE } from '../autocomplete/tokens/autocomplete.token';
import { AUTOCOMPLETE_INPUT, AutocompleteInputInterface } from '../autocomplete/tokens/autocomplete-input.token';
import { AUTOCOMPLETE_LIST, AutocompleteListInterface } from '../autocomplete/tokens/autocomplete-list.token';

@Component({
	selector: 'app-geo-autocomplete',
	templateUrl: './geo-autocomplete.component.html',
	styleUrls: ['./geo-autocomplete.component.scss'],
	standalone: true,
	providers: [
		{ provide: AUTOCOMPLETE, useExisting: GeoAutocompleteComponent },
	],
	imports: [AutocompleteModule],
})
export class GeoAutocompleteComponent implements Autocomplete {
	@ViewChild(AUTOCOMPLETE_INPUT) public autocompleteInput!: AutocompleteInputInterface;
	@ViewChild(AUTOCOMPLETE_LIST) public autocompleteList!: AutocompleteListInterface;

	constructor(private readonly httpClient: HttpClient) {}

	public loadItems(query: string): void {
		this.autocompleteInput.setIsLoading(true);

		this.httpClient
			.get(`https://jsonplaceholder.typicode.com/posts?q=${query}`)
			.pipe(delay(3000))
			.subscribe((resp: any) => {
				this.autocompleteList.setItems(resp.map(({ title }: { title: string }) => ({ name: title })));

				this.autocompleteInput.setIsLoading(false);
			});
	}
}
