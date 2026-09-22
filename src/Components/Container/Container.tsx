import React from 'react'
import './Container.css'

interface ContainerProps {
    children: React.ReactNode
}

function Container({children} : ContainerProps ) {
  return (
    <div className='container'>
        {children}
    </div>
  )
}

export default Container