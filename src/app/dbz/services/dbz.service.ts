import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.inteface";

@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
            nombre: 'Goku',
            poder: 15000
        },
        {
            nombre: 'Vegeta',
            poder: 8000
        }
    ];

    get personajes(): Personaje[] {
        return [...this._personajes];
    }

    constructor() {
    }

    agregarPersonaje (arg: Personaje) {
        this._personajes.push(arg);
    }
}