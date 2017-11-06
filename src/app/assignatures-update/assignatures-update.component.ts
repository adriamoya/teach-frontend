import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Provider that allows us to work and get parameters from the route given
import { Http } from '@angular/http';

import { AssignaturesUpdateGeneralComponent } from './assignatures-update-general.component'

@Component({
	selector: 'app-assignatures-update',
	templateUrl: './assignatures-update.component.html',
	styleUrls: ['./assignatures-update.component.css'],
})

export class AssignaturesUpdateComponent implements OnInit {

	private routeSub: any;
	// private req: any;
	assignatura: any;
	id: string;

	menuSelection: string = "general";

	constructor(private route: ActivatedRoute, private _http: Http) { }

	ngOnInit() {

		this.routeSub = this.route.params.subscribe(params => {
			console.log(params);
			this.id = params['id'];

			this._http.get('assets/json/assignatures-detail.json').subscribe(data => {
				data.json().filter(item => {
					// console.log(item);
					if (item.id == this.id) {
						// console.log(item);
						this.assignatura = item;
					}
				})
			})

		})
	};


	// important to unsubscribe (destroy) after using subscribe ...
	ngOnDestroy() {
		this.routeSub.unsubscribe();
		// this.req.unsubscribe();
	};
}

