import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AutocompleteModule } from './modules/autocomplete/autocomplete.module';

import { UserAutocompleteComponent } from './modules/user-autocomplete/user-autocomplete.component';
import { GeoAutocompleteComponent } from './modules/geo-autocomplete/geo-autocomplete.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ChipsModule } from './modules/chips/chips.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		HttpClientModule,
		FormsModule,
		AutocompleteModule,
		UserAutocompleteComponent,
		GeoAutocompleteComponent,
		ChipsModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
