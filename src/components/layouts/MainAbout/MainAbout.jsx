import React, {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3, faJava, faJsSquare, faPython, faGitAlt, 
    faReact, faDocker, faPhp, faPhoenixFramework } from '@fortawesome/free-brands-svg-icons'
import { faAsterisk, faDatabase, faFlask, faUserFriends } from '@fortawesome/free-solid-svg-icons'

import { Parrafo } from '../../ui/Parrafo/Parrafo';
import { TituloH2 } from '../../ui/Titulo/TituloH2';
import { Imagen } from '../../ui/Imagen/Imagen'
import Computadores from '../../../assets/images/computadores.svg'
import Perfil from '../../../assets/images/perfil.jpg'
import Computador from '../../../assets/images/computador.png'
import Paleta from '../../../assets/images/paleta-colores.png'
import Herramientas from '../../../assets/images/herramientas.png'



export const MainAbout = () => {

    useEffect(() => {
        Aos.init({ duration: 2000})
    }, [])

  return (
    <div className='mainAbout' id="about" data-aos="fade-up">
        <div className="container-imagen">
            <Imagen url={Computadores}/>
        </div>
        <div className="container-resumen">
            <div className="imagen-perfil">
                <Imagen url={Perfil}/>
            </div>
                <div className="parrafos">
                    <TituloH2 texto="Hola, mucho gusto,  soy Marlon Andrés Campo Amórtegui"/>
                    <Parrafo texto="Actualmente tengo 18 años, Mi perfil se enfoca en ser una persona responsable, 
                                    dedicada, respetuosa , con la disposición de aprender, elaborar y poner en práctica 
                                    los conocimientos obtenidos. Mi interés personal y profesional consiste en ser una persona
                                    importante en el ámbito de la programación y poder elaborar grandes proyectos que ayuden a la
                                    solución de problemas en nuestro entorno.  
                                    Te mostraré a continuación todas 
                                    mis especialidades"/>
                </div>
            </div>
        <div className="container-especialidades">
            <div className="card">
                <div className="icono">
                    <Imagen url={Paleta}/>
                </div>
                <TituloH2 texto="Front-end Developer"/>
                <Parrafo texto="Me interesa muchísimo el mundo del
                                desarrollo web ya que me permite también realizar y tener conocimiento sobre el diseño y el
                                maquetado de una página web," />
                <Parrafo texto="Lenguages que manejo (lvl Medio):  " clase="descripcion"/>
                <div className="lenguages">
                    <div className="html">
                        <FontAwesomeIcon icon={faHtml5}/> <Parrafo texto="HTML5"/>
                    </div>
                    <div className="css">
                        <FontAwesomeIcon icon={faCss3}/> <Parrafo texto="CSS "/>
                    </div>
                    <div className="javascript">
                        <FontAwesomeIcon icon={faJsSquare}/> <Parrafo texto="JavaScript"/>
                    </div>
                </div>
                <Parrafo texto="Herramientas" clase="descripcion2"/>
                <ul>
                    <li><FontAwesomeIcon icon={faReact}/> React</li>
                </ul>

            </div>
            <div className="card">
                <div className="icono">
                    <Imagen url={Herramientas}/>
                </div>
                <TituloH2 texto="Other systems" />
                <Parrafo texto="También manejo otros sistemas que son importantes para el ámbito
                                de la programación, que va desde la recopilación de datos hasta las metodologías de trabajo" />
                <Parrafo texto="Programas(lvl Básico):" clase="descripcion"/>
                <div className="lenguages">
                    <div className="db">
                        <FontAwesomeIcon icon={faDatabase}/> <Parrafo texto="BD"/>
                    </div>
                    <div className="docker">
                        <FontAwesomeIcon icon={faDocker}/> <Parrafo texto="Docker"/>
                    </div>
                    <div className="scrum">
                        <FontAwesomeIcon icon={faUserFriends}/> <Parrafo texto="SCRUM"/>
                    </div>
                </div>
                <Parrafo texto="Herramientas" clase="descripcion2"/>
                <ul>
                    <li><FontAwesomeIcon icon={faAsterisk}/>SQL</li>
                </ul>

            </div>
            <div className="card">
                <div className="icono">
                    <Imagen url={Computador}/>
                </div>
                <TituloH2 texto="Back-end Developer"/>
                <Parrafo texto="Me gusta codificar cosas desde cero y disfruto darle funcionalidad y magia a mis páginas web" />
                <Parrafo texto="Lenguages que manejo(lvl Básico):" clase="descripcion"/>
                <div className="lenguages">
                    <div className="python">
                        <FontAwesomeIcon icon={faPython}/> <Parrafo texto="Python"/>
                    </div>
                    <div className="java">
                        <FontAwesomeIcon icon={faJava}/> <Parrafo texto="Java"/>
                    </div>
                    <div className="php">
                        <FontAwesomeIcon icon={faPhp}/> <Parrafo texto="Php"/>
                    </div>
                </div>
                <Parrafo texto="Herramientas" clase="descripcion2"/>
                <ul>
                    <li><FontAwesomeIcon icon={faPhoenixFramework}/>Django</li>
                    <li><FontAwesomeIcon icon={faFlask}/>Flask</li>
                </ul>
            </div>
        </div>
    </div>
  )
}
