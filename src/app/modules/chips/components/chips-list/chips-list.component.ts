import { Component, ContentChild, TemplateRef } from '@angular/core';

@Component({
	selector: 'app-chips-list',
	templateUrl: './chips-list.component.html',
	styleUrls: ['./chips-list.component.scss'],
})
export class ChipsListComponent {
	public options = [
		{ key: 1, name: 'One' },
		{ key: 2, name: 'Two' },
		{ key: 3, name: 'Three' },
	];

	@ContentChild('custom') public customRef?: TemplateRef<null>;

	public onDelete(key: number): void {
		this.options = this.options.filter((item) => item.key !== key);
	}
}
