import React from 'react'

export const Imagen = ({url, id, clase}) => {
  return (
    <img id={id} src={url} alt="" className={clase} />
  )
}
