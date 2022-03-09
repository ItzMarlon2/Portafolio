import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/free-brands-svg-icons'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

export const BotonSubir = ({id, clase, event}) => {
  return (
    <div id={id} className={clase}>
      <FontAwesomeIcon icon={faAngleUp} onClick={event}/>
      </div>
  )
}
