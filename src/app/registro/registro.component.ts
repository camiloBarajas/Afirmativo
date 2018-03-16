import  { Component } from '@angular/core';
import { Router,ActivatedRoute, Params} from '@angular/router';
import { PeticionesService} from '../services/peticiones.service';
import { User} from '../models/user';

@Component({
    selector: 'registro-user',
    templateUrl: '../views/registro.component.html',
    styleUrls: ['./registro.component.css'],
    providers: [PeticionesService]
})

export class RegisterComponent {

    public user:User;
    public header:string;

    constructor(
        private _peticionesService: PeticionesService,
        private _route: ActivatedRoute,
        private _router: Router
        ) {
        this.user = new User("","","","","","");
        this.header="Registro de productos";
    }
    ngOnInit(){   
    console.log('Registrando usuario...') ;
    }

    onSubmit(){
        console.log(this.user);

        this._peticionesService.addNewUser(this.user).subscribe(
            response => {
                if(response){
                    this._router.navigate(['/home']);
                }else{
                    console.log(response);
                }
            },
            error=>{
                console.log(<any>error);
            })
    }
   
    
}
