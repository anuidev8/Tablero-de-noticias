import React from 'react';

import Button from '../Filters/ButtonFilter'

const Header = () => {

  return (

    <>

      <div className="header-title">
        <h1 className="section-title">Detalle Tablero</h1>
      </div>
      <Button title="Eliminar" styles={{ marginRight: '.9em' }} />
      <Button title="Etiquetas" bg="#122B3D" styles={{ marginRight: '1em' }} />
      <style jsx scoped>{`
           .header-title{
            margin: .5em .8em 0;
            flex: 1;
          }

          .subtitle-text{
            color: #fff;
          }
          .section-title{
            margin:0;
          }
          .header-title .section-title{
            text-align: start;
          }


      `}</style>
    </>
  )

}

export default Header
