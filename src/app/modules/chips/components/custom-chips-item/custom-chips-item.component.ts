import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-custom-chips-item',
	templateUrl: './custom-chips-item.component.html',
	styleUrls: ['./custom-chips-item.component.scss'],
})
export class CustomChipsItemComponent {
	@Input() public item;

	public onDeleteClick(key) {}
}
