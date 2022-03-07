import React from 'react'

import { Footer } from '../../layouts/Footer/Footer'
import { Header } from '../../layouts/Header/Header'
import { MainAbout } from '../../layouts/MainAbout/MainAbout'
import { MainPrincipal } from '../../layouts/MainPrincipal/MainPrincipal'



export const Body = () => {
  return (
    <body>
        <Header/>
        <MainPrincipal/>
        <MainAbout/>
        <Footer/>
    </body>
  )
}
