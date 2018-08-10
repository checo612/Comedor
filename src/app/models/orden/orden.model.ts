export interface Orden {
    usuario?: string;
    estatus: boolean;
    platillos: {
        platillo: string;
    };
}
