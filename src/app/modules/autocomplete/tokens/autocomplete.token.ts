import { InjectionToken } from '@angular/core';

export interface AutocompleteInterface {
	loadItems: (query: string) => void;
}

export const AUTOCOMPLETE = new InjectionToken<AutocompleteInterface>('AUTOCOMPLETE');
