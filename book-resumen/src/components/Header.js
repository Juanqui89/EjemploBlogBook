import React from "react";

const Header = () => {
    return (
        <>
        <nav>
            <img src={require(`../Imagenes/LogoDC.avif`)} />
            <ul>
                <li><a href="#">Inicio</a></li>
            </ul>
            <ul>
                <li><a href="#">Categorías</a></li>
            </ul>
            <ul>
                <li><a href="#">Peliculas</a></li>
            </ul>
            <ul>
                <li><a href="#">Contacto</a></li>
            </ul>
        </nav>
        </>
    )
}


export default Header