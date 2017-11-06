import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Provider that allows us to work and get parameters from the route given
import { Http } from '@angular/http';

@Component({
  selector: 'app-proves-detail',
  templateUrl: './proves-detail.component.html',
  styleUrls: ['./proves-detail.component.css']
})
export class ProvesDetailComponent implements OnInit {

	private routeSub: any;
	// private queryParamsSub: any;
	private url: any;
	prova: any;
	id: string;
	// assignatura: string;
	// assignatura_url: any;


	constructor(private route: ActivatedRoute, private _http: Http) { }

	ngOnInit() {

		// this.assignatura = '';

		// this.queryParamsSub = this.route.queryParams.subscribe(queryParams => {
		// 	console.log(queryParams)
		// 	let qParams = queryParams;
		// 	for (var i in qParams){
		// 		this.assignatura += qParams[i];
		// 	}
		// });

		// this.url = this.route.url.subscribe(url => {
		// 	this.assignatura_url = url[1];
		// })

		this.routeSub = this.route.params.subscribe(params => {
			console.log(params);
			this.id = params['id'];
				
			this._http.get('assets/json/proves-detail.json').subscribe(data => {
				data.json().filter(item => {
					// console.log(item);
					if (item.id == this.id) {
						// console.log(item);
						this.prova = item;
					}
				})
			})
		})
	};

	ngOnDestroy() {
		this.routeSub.unsubscribe();
		// this.queryParamsSub.unsubscribe();
	};

}