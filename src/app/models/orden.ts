export interface Orden {
    key?: string;
    estatus: boolean;
    // platillos: Array<any>;
    platillos: {
        platillos: string;
    }
    usuario: string;

}
export class Orden {
    constructor() {}
}

