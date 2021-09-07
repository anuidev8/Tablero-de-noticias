import React from 'react';
import Input from '../Form/Input';
import UploadImage from '../Form/UploadImage';
import BoardModal from './BoardModal';
import Button from '../Button'

const BoardJoinModal = () => {


  return (
    <>
      <BoardModal title="Unirme a un tablero" type="join" >
        <form className="board-create-form d-flex flex-column justify-content">

          <div className="upload-image-box d-flex flex-column justify-content--center align-items--center">
            <label className="subtitle-section">Imagen Principal</label>
            <UploadImage />
          </div>
          <div className="input-code-box d-flex flex-column justify-content--center align-items-center">
            <Input label="Código" name="code" className="text-center" />
          </div>
          <div className="btn-create-box d-flex justify-content--center align-items--center align-items--center">
            <Button title="Crear" />
          </div>
        </form>
      </BoardModal>
      <style jsx scoped>{`
              .board-create-form{
                margin-top: 1.4em;
              }
            .upload-image-box{
              margin-bottom: 1em;
            }

              .input-code-box{
              width: 118px;
              margin-top: 1em;

            }
            .btn-create-box{
              margin-top: 3em;
            }

          `}</style>
    </>
  )

}

export default BoardJoinModal
