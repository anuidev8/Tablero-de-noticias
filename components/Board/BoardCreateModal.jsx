import React from 'react';
import Input from '../Form/Input';
import UploadImage from '../Form/UploadImage';
import BoardModal from './BoardModal';
import Button from '../Button'

const BoardCreateModal = () => {


  return (
    <>
      <BoardModal title="Crear tablero nuevo" type="create">
        <form className="board-create-form">
          <Input label="Nombre" name="name" />
          <div className="upload-image-box">
            <label className="subtitle-section">Imagen Principal</label>
            <UploadImage />
          </div>
          <div className="input-code-box">
            <Input label="Código" name="code" />
          </div>
          <div className="btn-create-box d-flex justify-content--center align-items--center">
            <Button title="Crear" />
          </div>
        </form>
      </BoardModal>
      <style jsx scoped>{`

            .upload-image-box{
              margin-bottom: 1em;
            }

              .input-code-box{
              width: 118px;
            }
            .btn-create-box{
              margin-top: 3em;
            }

          `}</style>
    </>
  )

}

export default BoardCreateModal
