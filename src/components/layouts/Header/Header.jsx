import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'



import { Imagen } from '../../ui/Imagen/Imagen'
import Logo from '../../../assets/images/logo.svg'

export const Header = () => {

    const mostrarMenu=()=>{
        document.querySelector(".menu").classList.toggle("mostrar_menu")
    }

return (
    <div className='header'>
        <div className="container__header">
            <div className="logo">
                <Imagen url={Logo}/>
            </div>
            <div className="menu">
                <nav>
                    <ul>
                        <li><a href="#main">Inicio</a></li>
                        <li><a href="#about">Acerca de mi</a></li>
                        <li><a href="#">Mis proyectos</a></li>
                    </ul>
                </nav>
            </div>
            <FontAwesomeIcon icon={faBars} id="icon_menu" onClick={mostrarMenu}/>
        </div>
    </div>
)
}
