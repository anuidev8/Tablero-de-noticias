
import React from 'react';
import style from './Topnavigation.module.css'

import ProgramFilter from '../Filters/Programs'
import EtiquetasFilter from '../Filters/Tags'


const TopNavigationBar = ({ children, filter = true, bg = '#76C048' }) => {

  return (

    <header className={` ${style.topNavigationBar}`}>

      <div style={{ backgroundColor: bg }} className={`d-flex align-items--center ${style.topNavigationBarWrapper}`}>
        {children}
        {
          filter &&
          <div className="d-flex" style={{ marginLeft: "1.8em" }}>
            <ProgramFilter />
            <EtiquetasFilter />
          </div>
        }

      </div>

    </header>

  )


}

export default TopNavigationBar
