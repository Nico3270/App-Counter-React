describe("Pruebas en <DemoComponent />", () => {
    test ("Esta prueba no debe de fallar", ()=>{
        // 1. incialización
         const message1 = "Hola Mundo";
     
        // 2. Estímulo
         const message2 = message1.trim(); ///El método trim se utiliza para eliminar los espacios iniciales y finales de l string
     
        // 3. Observar el comportamiento ... esperado
        // toBe significa que "es igual a", en este caso se espera que mensaje 1 sea igual a mensaje 2
         expect(message1).toBe(message2);
     })
})


