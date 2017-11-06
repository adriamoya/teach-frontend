import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-assignatures-list',
  templateUrl: './assignatures-list.component.html',
  styleUrls: ['./assignatures-list.component.css']
})
export class AssignaturesListComponent implements OnInit {

	private req: any;
	title = "Assignatures";
	assignaturesList: [any];

	constructor(private _http:Http) { }

	ngOnInit() {
		this.req = this._http.get('assets/json/assignatures-list.json').subscribe(data=>{
			// console.log(data.json());
			this.assignaturesList = data.json() as [any];
		})
	}

	ngOnDestroy() {
		this.req.unsubscribe();
	}

}
