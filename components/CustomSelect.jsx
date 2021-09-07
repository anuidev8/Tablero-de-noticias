import React from 'react';

const CustomSelect = ({ options }) => {


  return (
    <>
      <div className="m-select-wrapper">
        <select className="m-select w-100" name="" id="">
          {
            options.map((item, key) => (
              <option key={key} value={item.value}>{item.name}</option>
            ))
          }
        </select>

      </div>
      <style jsx scoped>{`
              .m-select-wrapper{
                position: relative;
                color: #fff;
              }
              .m-select{
                padding: .4em;
                border:none;
                background-color: #7A78C9;
                color: #fff;
              }

              .m-select-icon{
                position: absolute;
                top: 20%;
                right: 5%;
              }

        `}</style>
    </>
  )
}


export default CustomSelect
