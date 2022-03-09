import React, {useEffect} from 'react'
import { Imagen } from '../../ui/Imagen/Imagen'
import { TituloH2 } from '../../ui/Titulo/TituloH2'
import { Parrafo } from '../../ui/Parrafo/Parrafo'
import Aos from 'aos'
import 'aos/dist/aos.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import php from '../../../assets/images/php.PNG'
import rick from '../../../assets/images/rick-morty.PNG'
import flask from '../../../assets/images/flask.PNG'
import carrito from '../../../assets/images/carrito.PNG'
import deporCasd from '../../../assets/images/deporCasd.PNG'



export const MainProyectos = () => {

    useEffect(() => {
        Aos.init({ duration: 2000})
    }, [])

return (
    <div className='container' id="mainProyectos" data-aos="fade-up"> 
        <div className="titulo">
            <TituloH2 texto="MIS PROYECTOS"/>
        </div>
        <div className="galeria">
            <div className="container-imagenes">
                <Imagen url={php} alt="" clase="img"/>
                <div className="capa">
                    <h3>VISITA EL CÓDIGO FUENTE</h3>
                    <a href="https://github.com/ItzMarlon2/Proyecto-CRUD-PHP.git" target={'_blank'}>Visitar <FontAwesomeIcon icon={faArrowRight} className="icono"/></a>
                </div>
                <Parrafo texto="CRUD PHP"/>
            </div>
            <div className="container-imagenes">
                <Imagen url={rick} alt="" clase="img"/>
                <div className="capa">
                    <h3>VISITA EL CÓDIGO FUENTE</h3>
                    <a href="https://api-rickandmorty-react.herokuapp.com/" target={'_blank'}>Visitar <FontAwesomeIcon icon={faArrowRight} className="icono"/></a>
                </div>
                <Parrafo texto="API RICK AND MORTY"/>
            </div>
            <div className="container-imagenes">
                <Imagen url={flask} alt="" clase="img"/>
                <div className="capa">
                    <h3>VISITA EL CÓDIGO FUENTE</h3>
                    <a href="https://github.com/ItzMarlon2/CRUD-FLASK.git" target={'_blank'}>Visitar <FontAwesomeIcon icon={faArrowRight} className="icono"/></a>
                </div>
                <Parrafo texto="CRUD FLASK"/>
            </div>
            <div className="container-imagenes">
                <Imagen url={carrito} alt="" clase="img"/>
                <div className="capa">
                    <h3>VISITA EL CÓDIGO FUENTE</h3>
                    <a href="https://mac-carritodecomprasjs.netlify.app" target={'_blank'}>Visitar <FontAwesomeIcon icon={faArrowRight} className="icono"/></a>
                </div>
                <Parrafo texto="CARRITO DE COMPRAS JS"/>
            </div>
            <div className="container-imagenes">
                <Imagen url={deporCasd} alt="" clase="img"/>
                <div className="capa">
                    <h3>VISITA LA PÁGINA WEB</h3>
                    <a href="https://mac-maquetadoweb.netlify.app" target={'_blank'}>Visitar <FontAwesomeIcon icon={faArrowRight} className="icono"/></a>
                </div>
                <Parrafo texto="MAQUETADO WEB"/>
            </div>
            {/* <div class="container-img">
                <img src="" alt="" class="img-show">
                <i class="fas fa-times-circle"></i>
                <p class="copy"></p>
            </div> */}
        </div>
    </div>
  )
}
