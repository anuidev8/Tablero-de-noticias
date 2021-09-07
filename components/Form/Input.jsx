import React from 'react';


const Input = ({ label, name, className }) => {

  return (

    <>
      <div className={`form-post-group ${className}`}>
        <label className="subtitle-section" htmlFor="text">{label}</label><br />
        <input type="text" id="text" name={name} className="input-post " />
      </div>

      <style jsx scoped>{`

            .form-post-group{
              margin-bottom: 1em;
            }
            .input-post{
              padding: .1em .6em;
              border:none;
              width: 95%;
              margin-top: .2em;

            }

          `}</style>

    </>

  )

}

export default Input
