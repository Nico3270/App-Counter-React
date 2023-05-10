import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";

describe("Probando funciones de archivo 08-imp-exp.js", () => {
    test("Funcion getHeroesById debe de retornar un heroe por Id", () => {
        const id = 1;
        const hero = getHeroeById(id);
        console.log(hero);

        expect(hero).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        })
    });
    test("Probando función getHeroesByOwner y que la longitud sea la misma", () => {
        const busqueda = "DC";
        const resultado = getHeroesByOwner(busqueda);
        const resultadoMarvel =getHeroesByOwner( "Marvel");
        console.log(resultadoMarvel);
        expect(resultado.length).toEqual(3);
        expect (resultadoMarvel.length).toEqual(2);
    })
})

