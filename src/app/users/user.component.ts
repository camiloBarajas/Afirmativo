import { Component } from '@angular/core';
import { User} from '../models/user';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { PeticionesService} from '../services/peticiones.service';

@Component({
	selector: 'user-list',
	templateUrl: '../views/user.component.html',
	providers: [PeticionesService]
})

export class UserListComponent {
	public header:string;
	public user:User;
	public usuarios: User[];
	public rows;

	constructor(
		private _peticionesService: PeticionesService,
		private _route: ActivatedRoute,
		private _router: Router
	)
	///	private _peticionesService: PeticionesService;
	//	this.user= new User('JJnarvaes', 'jjnarva@ibm.co.com','12344','Junior','Narvaez','3153516136');
	{
		this.header="Listado de Usuarios";
	}


	ngOnInit(){	
		this._peticionesService.getUsuarios().subscribe(
			result => {
					console.log(result);
					console.log(result.code);
					this.usuarios= result;
			},
			error => {
				var errorMessage =<any>error;
				console.log(errorMessage);
			}
			);
	}

	
}
