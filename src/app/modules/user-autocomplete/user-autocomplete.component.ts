import { Component, ViewChild } from '@angular/core';
import { Autocomplete } from '../autocomplete/classes/autocomplete';
import { AutocompleteModule } from '../autocomplete/autocomplete.module';
import { AutocompleteInput } from '../autocomplete/classes/autocomplete-input';
import { HttpClient } from '@angular/common/http';
import { AutocompleteList } from '../autocomplete/classes/autocomplete-list';
import { delay } from 'rxjs';

@Component({
	selector: 'app-user-autocomplete',
	templateUrl: './user-autocomplete.component.html',
	styleUrls: ['./user-autocomplete.component.scss'],
	standalone: true,
	providers: [{ provide: Autocomplete, useExisting: UserAutocompleteComponent }],
	imports: [AutocompleteModule],
})
export class UserAutocompleteComponent implements Autocomplete {
	@ViewChild(AutocompleteInput) public autocompleteInput!: AutocompleteInput;
	@ViewChild(AutocompleteList) public autocompleteList!: AutocompleteList;

	constructor(private readonly httpClient: HttpClient) {}

	public loadItems(query: string): void {
		this.autocompleteInput.setIsLoading(true);

		this.httpClient
			.get(`https://jsonplaceholder.typicode.com/users?q=${query}`)
			.pipe(delay(2000))
			.subscribe((resp) => {
				this.autocompleteList.setItems(resp);

				this.autocompleteInput.setIsLoading(false);
			});
	}
}
