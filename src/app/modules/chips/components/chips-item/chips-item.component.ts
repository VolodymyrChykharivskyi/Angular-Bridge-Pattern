import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-chips-item',
	templateUrl: './chips-item.component.html',
	styleUrls: ['./chips-item.component.scss'],
})
export class ChipsItemComponent {
	@Input() public item;

	@Output() public delete = new EventEmitter();

	public onDeleteClick(key: number) {
		this.delete.emit(key);
	}
}
