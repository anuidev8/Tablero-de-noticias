import React from 'react';
import Button from '../Button'

const OptionsContainer = ({ children }) => {

  return (
    <>
      <div className="option-container">
        <div className="option-container-wrapper">
          <div className="separator"></div>
          {children}
          <div className="button-box">
            <Button title="Volver" isLink router="/" />
          </div>
        </div>
      </div>
      <style jsx>{`

            .option-container{
              --radius:1.3em;
              margin-top: 4.5em;
              width: 100%;
              height: 78%;
              border-top-left-radius: var(--radius);
              border-top-right-radius: var(--radius);
              background-color: #fff;

            }

            .option-container-wrapper{
              display: flex;
              align-items: center;
              flex-direction: column;
              padding: 1.4em 2.5em;
            }
            .separator{
              width: 65px;
              height: 6px;
              border-radius: .37em;
              margin-bottom: 1.6em;
              background-color: var(--primary-color)
            }
            .button-box{
              margin-top: 2.6em;
            }

        `}</style>
    </>
  )

}

export default OptionsContainer
