const nombre = "Nicolas";
const lista = [1,2,3,4,5,6,7,8];
let usuario = {
    nombre: "Cristian Nicolás Rodriguez González", 
    edad: 27
}

const getSaludo = (nombre) => `Hola ${nombre}`;
export function App(props) {
    console.log(props);
    return (
        <>
            <h1>Hola Mundo!!!!</h1>
            <p>Soy {nombre}</p>
            <h2>{lista}</h2>
            <h3>{getSaludo(usuario.nombre)}</h3>
        </>
    )
}

