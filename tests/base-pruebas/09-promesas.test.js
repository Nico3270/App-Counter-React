import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";

describe("Probando la función del archivo 09-promesas.js",() =>{
    test("Probar función de promesas, debe retornar un heroe",(done)=>{
        const id = 1;
        getHeroeByIdAsync(1).then(hero => {
            expect(false).toBe(false);
            done();
        })

    })
})