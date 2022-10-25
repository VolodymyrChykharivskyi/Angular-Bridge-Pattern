import { InjectionToken } from '@angular/core';

export interface AutocompleteInputInterface {
	setIsLoading: (value: boolean) => void;
}

export const AUTOCOMPLETE_INPUT = new InjectionToken<AutocompleteInputInterface>('AUTOCOMPLETE_INPUT');
