import { getImagen } from "../../base-pruebas/11-async-await";

describe("Probando función 11-asyn-await", () => {
    test("Se espera que la funcion getImagen retorne el url de la imagen", async ()=>{
        const url = await getImagen();
        console.log(url);
    })
})