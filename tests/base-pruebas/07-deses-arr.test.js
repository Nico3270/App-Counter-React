import { retornaArreglo } from "../../base-pruebas/07-deses-arr";

describe("Probando archivo 07-deses-arr.js", ()=> {
    test("Probando función retornaArreglo, que debe retornar un string y un número", () => {
        const [letters, numbers] = retornaArreglo();
        expect(letters).toBe("ABC");
        expect(numbers).toBe(123); 
        expect( typeof letters).toBe("string");
        expect(typeof numbers).toBe("number");
    })
})