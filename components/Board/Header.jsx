import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { showModal } from '../../redux/board/actions'

import Button from '../Filters/ButtonFilter'

const Header = ({ showModal }) => {

  return (

    <>

      <div className="header-title">
        <h1 className="section-title">Tableros</h1>
        <h3 className="subtitle-text">Discuciones</h3>
      </div>
      <Button title="Unirme" styles={{ marginRight: '.9em' }} onClick={() => showModal({ type: 'join', isActive: true })} />
      <Button title="Crear Tablero" onClick={() => showModal({ type: 'create', isActive: true })} bg="#122B3D" styles={{ marginRight: '1em' }} />
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
const mapDispatchToProps = (dispatch) => {
  return {
    showModal: bindActionCreators(showModal, dispatch),

  }
}

export default connect(null, mapDispatchToProps)(Header)
