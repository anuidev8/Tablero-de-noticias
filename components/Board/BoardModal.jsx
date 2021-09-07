import React, { useRef, useState } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { showModal } from '../../redux/board/actions'

const BoardModal = ({ children, type, title, showModal }) => {
  const [openModal, setOpenModal] = useState(true)
  const modalWrapper = useRef(null)
  const hidden = (e) => {
    const boardModal = e.target.localName
    if (boardModal.includes('aside')) {
      setOpenModal(false)
      modalWrapper.current.addEventListener('animationend', () => {
        showModal({ type, isActive: false })

      })

    }
  }

  return (
    <>

      <aside onClick={(e) => hidden(e)} className={`board-modal `} role="modal">
        <div ref={modalWrapper} className={`board-modal-wrapper ${!openModal ? 'tr-reverse-modal' : 'tr-modal'}`}>
          <div className="line-indicator"></div>
          <h2 className="section-title">{title}</h2>
          {children}
        </div>
      </aside>

      <style jsx scoped>{`

            .board-modal{
              position: absolute;
              display: flex;
              justify-content: center;
              align-items: flex-end;
              width: 100%;
              height: 100%;
              top: 0;
              left: 0;
              background-color: rgba(18, 43, 61, .7);
              z-index: 110;
            }
            .board-modal-wrapper{
              padding: 2em 1.6em;
              width: 100%;
              height: 582px;
              background-color: #F3F3F3;
              border-top-right-radius: var(--br-radius-sections);
              border-top-left-radius: var(--br-radius-sections);
              overflow-y: auto;

            }

            .tr-modal{
              transform: translateY(100%);
              animation: translateY .6s both ease-in-out;
            }
            .tr-reverse-modal{
              transform: translateY(0);
              animation:translateReverse .6s both ease-in-out;
            }

            @keyframes translateY {
              to{
                transform: translateY(0)
              }
            }
            @keyframes translateReverse {
              to{
                transform: translateY(100%)
              }
            }

            .board-modal .section-title{
              color: var(--secondary-color);
              font-size: 1.4rem;
              margin-top: 1em;
            }
            .line-indicator{
              width: 65px;
              height: 6px;
              background-color: var(--blue-dark-color);
              border-radius: .8em;
              margin:0 auto;
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

export default connect(null, mapDispatchToProps)(BoardModal)
