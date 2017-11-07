import { Component, OnInit } from '@angular/core';
import { AssignaturesService } from '../services/assignatures.service';

@Component({
  selector: 'app-proves-create',
  templateUrl: './proves-create.component.html',
  styleUrls: ['./proves-create.component.css'],
  providers: [AssignaturesService]
})
export class ProvesCreateComponent implements OnInit {

	private req: any;
	assignatures: [any];

	constructor(private _assignatures: AssignaturesService) { }

	ngOnInit() {

		this.req = this._assignatures.list().subscribe(data => {
			this.assignatures = data;
		});
	};

	ngOnDestroy() {
		this.req.unsubscribe()
	};

}
