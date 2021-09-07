import React from 'react';

const UploadImage = () => {

  return (
    <>

      <div className="img-picker d-flex justify-content">
        <label htmlFor="image" className="img-picker-add">
          <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="3em" width="3em" ><path fill="none" stroke="#5351A3" strokeWidth={1} d="M12,22 L12,2 M2,12 L22,12" /></svg>
        </label>
        <input type="file" name="image" id="image" className="img-picker-input" />
      </div>

      <style jsx scoped>{`

    .img-picker{
              position: relative;
              width: 76px;
              height: 86px;
              border:1px  dashed var(--purple-color) ;
              background-color: #fff;
              border-radius: 1.2em;
              margin-top: .6em;
            }

            .img-picker-add{
              border:none;
            }

            .img-picker-input{
              position: absolute;
              opacity: 0;

            }

      `}</style>
    </>
  )

}

export default UploadImage
