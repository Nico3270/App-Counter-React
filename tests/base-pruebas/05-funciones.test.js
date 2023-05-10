import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones"

describe("Probando las funciones del archivo 05-funciones js", () => {
    test("Probar función getUser, que retorna un objeto con claves uid, y username", () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect (testUser).toEqual(user);
    });
    test("Probando la función getUsuarioActivo", () => {
        const name = "Nicolás";
        const userTest = {
            uid: 'ABC567',
            username: name
        };
        const usuarioFuncion = getUsuarioActivo(name);

        expect (userTest).toEqual(usuarioFuncion);
    })
})

