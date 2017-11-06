import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Provider that allows us to work and get parameters from the route given
import { Http } from '@angular/http';

import { AssignaturesUpdateComponent } from './assignatures-update.component';

@Component({
	selector: 'app-assignatures-update-general',
	templateUrl: './assignatures-update-general.component.html'
})

export class AssignaturesUpdateGeneralComponent implements OnInit {

	// passed from parent AssignaturesUpdateComponent
	@Input() assignatura: any;
	@Input() menuSelection: string;

	constructor() { };

	ngOnInit() { 

		// console.log("HEEEEEY"); 
		// console.log(this.assignatura);
		// console.log(this.menuSelection)
		
	};
}

