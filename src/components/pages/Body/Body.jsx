import React from 'react'
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import { Footer } from '../../layouts/Footer/Footer'
import { Header } from '../../layouts/Header/Header'
import { MainAbout } from '../../layouts/MainAbout/MainAbout'
import { MainPrincipal } from '../../layouts/MainPrincipal/MainPrincipal'
import { MainProyectos } from '../../layouts/MainProyectos/MainProyectos'
import { BotonSubir } from '../../ui/BotonSubir/BotonSubir';




export const Body = () => {

  const boton = document.getElementById('boton_arriba')
  console.log(boton);

  const obtener_pixeles = () => document.documentElement.scrollTop || document.body.scrollTop

  let scroll    = Scroll.animateScroll;

  const irArriba = () =>{
    if (obtener_pixeles() >0) {
      scroll.scrollTo(0,0)
    }
  }

  window.onscroll = function(){
    if(obtener_pixeles() >50){
      console.log(boton);

      boton.classList.add("mostrar")
      boton.classList.remove("ocultar")
    } else{
      boton.classList.add("ocultar")
      boton.classList.remove("mostrar")
      console.log("hola2");
    }
  }

  return (
    <body>
      <>
        <BotonSubir id="boton_arriba" clase="ocultar" event={irArriba}/>
        <Header/>
        <MainPrincipal/>
        <MainAbout/>
        <MainProyectos/>
        <Footer/>
        </>
    </body>
  )
}
