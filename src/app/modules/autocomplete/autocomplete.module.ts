import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteInputComponent } from './components/autocomplete-input/autocomplete-input.component';
import { AutocompleteListComponent } from './components/autocomplete-list/autocomplete-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [AutocompleteInputComponent, AutocompleteListComponent],
	imports: [CommonModule, FormsModule],
	exports: [AutocompleteInputComponent, AutocompleteListComponent],
})
export class AutocompleteModule {}
