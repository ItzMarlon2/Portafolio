import React, {useEffect} from 'react'
import ReactPlayer from 'react-player'
import Aos from 'aos'
import 'aos/dist/aos.css';

// import { bars } from "@fortawesome/free-solid-svg-icons";

import Maletin from '../../../assets/images/maletin.png'
import Microfono from '../../../assets/images/microfono.png'
import Archivo from '../../../assets/images/archivo.png'

import { Imagen } from '../../ui/Imagen/Imagen'
import { Parrafo } from '../../ui/Parrafo/Parrafo'
import { TituloH1 } from '../../ui/Titulo/TituloH1'
import { TituloH2 } from '../../ui/Titulo/TituloH2'





export const MainPrincipal = () => {

    window.onscroll = function(){
        let posicion = window.pageYOffset || document.documentElement.scrollTop

        let elemento1 = document.getElementById("img_micro")
        let elemento2 = document.getElementById("img_numeral")

        elemento1.style.bottom = posicion * 0.1 + "px"
        elemento2.style.top = posicion * 0.1 + "px"
    }

    useEffect(() => {
        Aos.init({ duration: 2000})
    }, [])

  return (
    <main className='MainPrincipal' id="main">
        <div className="cover">
            <div className="text__information-cover" data-aos="fade-right">
                <Imagen url={Maletin}/><TituloH1 texto="¡BIENVENIDO A MI PORTAFOLIO! SOY MARLON ANDRÉS CAMPO AMÓRTEGUI"/>
                <Parrafo texto="(Web developer)"/>
                <div className="buttons__cover">
                    <a className="btn__sobre-cover" href="#footer">Más Sobre mi</a>
                </div>
            </div>
            <div className="media__cover" data-aos="fade-left">
                <ReactPlayer className="video" url={require('../../../assets/images/animacion_cover.webm')} playing playsinline loop muted preload="auto" />
            </div>
        </div>
        <div className="container__banner">
            <div className="banner">
                <div className="banner__icon-micro">
                    <Imagen id="img_micro" url={Microfono}/>
                </div>
                <div className="banner__icon-numeral">
                    <Imagen id="img_numeral" url={Archivo}/>
                </div>
                <div className="banner__text">
                    <a href="https://drive.google.com/file/d/13dpwDnlEyYusn7MGwvfzSgclrlFG11D7/view?usp=sharing" target={'_blank'}>¡Descarga aqui mi hoja de vida!</a>
                </div>
                
            </div>
        </div>
    </main>
  )
}
