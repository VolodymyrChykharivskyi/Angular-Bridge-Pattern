import { InjectionToken } from '@angular/core';

export interface Chips {
	onDelete: (key: number) => void;
}

export const CHIPS = new InjectionToken<Chips>('CHIPS');
