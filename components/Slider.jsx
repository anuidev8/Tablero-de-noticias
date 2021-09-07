import React from 'react';


const Slider = ({ children }) => {
  return (
    <>
      <div className="m-slider d-flex">{children}</div>
      <style jsx scoped>{`

      .m-slider{
          flex: none;
          flex-flow: row nowrap;
          justify-content: space-between;
          padding: 0 1.2em;
          width: 100%;
          overflow: auto;
          scroll-snap-type: none;

          /* scroll-snap-type: x mandatory; */

        }

        .m-slider::-webkit-scrollbar {
            display: none;
          }

        `}</style>
    </>
  )
}

const SliderItem = ({ children, items = 2 }) => {


  return (
    <>
      <div className="m-slider-item ">
        {children}
      </div>
      <style jsx scoped>{`

      .m-slider-item{
          display: grid;
          grid-template-columns:1fr 1fr;
          grid-gap:0 20px;
          flex: none;
          width: 100%;
          height: auto;
          margin-right: 10px;
          text-align: center;
        }

        `}</style>

    </>
  )

}

export { Slider, SliderItem }
