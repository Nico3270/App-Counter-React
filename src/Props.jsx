
import PropTypes from "prop-types"
export const Properties = ({title, subtitle,mensaje}) => {
    return(
        <>
            <h2>Hola, aquí va el titulo: {title}</h2>
            <h2>Pero acá tenemos el subtitulo: {subtitle}</h2>
            <h2>Y finalmente este es el mensaje: {mensaje}</h2>
        </>
    )
};

Properties.propTypes = {
   title : PropTypes.string.isRequired,
   subtitle : PropTypes.string.isRequired
}

Properties.defaultProps = {
    title: "No hay titulo",
    subtitle: "No hay subtitulo",
    mensaje: "No hay mensaje"
}