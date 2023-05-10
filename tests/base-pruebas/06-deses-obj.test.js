import { usContext } from "../../base-pruebas/06-deses-obj";

describe("Realizando prueba al archivo 06-deses-obj.js", () => {
    test("Probando función usContext", () => {
        const objetoPrueba = {
            clave: "Nico96",
            nombre: "Nicolás",
            edad: 27,
            rango: "General"
        };
        const objetoFuncion = usContext(objetoPrueba);
        expect (objetoFuncion.nombreClave).toEqual(objetoPrueba.clave);
    })
})