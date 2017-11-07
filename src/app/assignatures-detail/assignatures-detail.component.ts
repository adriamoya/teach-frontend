import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Provider that allows us to work and get parameters from the route given
import { Http } from '@angular/http';
import { SlicePipe } from '@angular/common';

import { AssignaturesService } from '../services/assignatures.service';

@Component({
  selector: 'app-assignatures-detail',
  templateUrl: './assignatures-detail.component.html',
  styleUrls: ['./assignatures-detail.component.css'],
  providers: [AssignaturesService]
})
export class AssignaturesDetailComponent implements OnInit {

	// CREATE A NEW COMPONENT FOR THE LINECHART

	// GET PROVES PROMIG BY JOINING alumnes-detail with proves-detail.

	private routeSub: any;
	private req: any;
	assignatura: any;
	proves_assignatura: any;
	id: string;

	constructor(private route: ActivatedRoute, private _http: Http, private _assignatures: AssignaturesService) { }

	ngOnInit() {

		this.proves_assignatura = [];

		this.routeSub = this.route.params.subscribe(params => {
			// console.log(params);
			this.id = params['id'];

			this.req = this._assignatures.list().subscribe(data => {
				data.filter(item => {
					if (item.id == this.id) {
						this.assignatura = item;
					}

				});

			});

			this._http.get('assets/json/proves-detail.json').subscribe(data => {
				data.json().filter(item => {
					// console.log(item);
					if (item.assignatura.id == this.id) {
						this.proves_assignatura.push(item);
					}

				});


			});

		});
	};


	// important to unsubscribe (destroy) after using subscribe ...
	ngOnDestroy() {
		this.routeSub.unsubscribe();
		this.req.unsubscribe();
	};
}
