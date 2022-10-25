import { InjectionToken } from '@angular/core';

export interface AutocompleteListInterface {
	setItems: (items: any) => void;
}

export const AUTOCOMPLETE_LIST = new InjectionToken<AutocompleteListInterface>('AUTOCOMPLETE_LIST');
