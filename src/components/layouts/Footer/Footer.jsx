import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { Imagen } from '../../ui/Imagen/Imagen'
import Telefono from '../../../assets/images/telefono.png'
import Correo from '../../../assets/images/correo.png'
import Heart from '../../../assets/images/heart.png'


export const Footer = () => {
  return (
    <div className="footer" id="footer">
      <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#121214" fill-opacity="1" d="M0,96L48,90.7C96,85,192,75,288,80C384,85,480,107,576,149.3C672,192,768,256,864,266.7C960,277,1056,235,1152,202.7C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
      <div className="box">
          <div className="banner__icon-telefono">
            <Imagen id="img_telefono" url={Telefono}/>
          </div>
          <div className="banner__icon-correo">
            <Imagen id="img_correo" url={Correo}/>
          </div>
          <div className="banner__icon-heart">
            <Imagen id="img_heart" url={Heart}/>
          </div>
          <div className="info__footer">
          <ul>
            <div className="li"><a href=""><FontAwesomeIcon icon={faEnvelope}/> marlonamorteguicampo@gmail.com</a></div>
            <div className="li"><a href=""><FontAwesomeIcon icon={faPhone}/> +57 3186823863</a></div>
            <div className="li"><a href=""><FontAwesomeIcon icon={faFacebook}/> Marlon Campo</a></div>
          </ul>
        <div className="hr">
        <hr />
        </div>
        <div className="derechos">
          <p>&copy;2022 Marlon Campo All rights reserved.</p>
        </div>
        </div>
      </div>
    </div>
  )
}
