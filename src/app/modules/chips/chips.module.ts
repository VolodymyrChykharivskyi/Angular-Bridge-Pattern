import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipsListComponent } from './components/chips-list/chips-list.component';
import { ChipsItemComponent } from './components/chips-item/chips-item.component';
import { CustomChipsItemComponent } from './components/custom-chips-item/custom-chips-item.component';

@NgModule({
	declarations: [ChipsListComponent, ChipsItemComponent, CustomChipsItemComponent],
	imports: [CommonModule],
	exports: [ChipsListComponent, CustomChipsItemComponent],
})
export class ChipsModule {}
