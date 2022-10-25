import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AutocompleteModule } from './modules/autocomplete/autocomplete.module';
import { GeoAutocompleteComponent } from './modules/geo-autocomplete/geo-autocomplete.component';
import {UserAutocompleteComponent} from "./modules/user-autocomplete/user-autocomplete.component";

@NgModule({
	declarations: [AppComponent, GeoAutocompleteComponent],
	imports: [BrowserModule, AutocompleteModule, UserAutocompleteComponent],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
