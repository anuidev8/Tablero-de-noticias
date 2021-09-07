import React from 'react';

import { Slider, SliderItem } from '../Slider'
import BoardCard from '../Board/BoardCard'

const BoardList = () => {

  return (
    <>
      <section className="board-section ">
        <h2 className="subtitle-section">Mis tableros</h2>
        <Slider>
          <SliderItem>
            <BoardCard />
            <BoardCard />
          </SliderItem>

          <SliderItem>
            <BoardCard />
            <BoardCard />
          </SliderItem>

          <SliderItem>
            <BoardCard />
            <BoardCard />
          </SliderItem>

        </Slider>


        <h2 className="subtitle-section">Participando</h2>
        <Slider>
          <SliderItem>
            <BoardCard />
            <BoardCard />
          </SliderItem>

          <SliderItem>
            <BoardCard />
            <BoardCard />
          </SliderItem>

          <SliderItem>
            <BoardCard />
            <BoardCard />
          </SliderItem>

        </Slider>

      </section>
      <style jsx scoped>{`

        .board-section{
          padding-top: 8em;
          background-color: #fff;
          min-height: 100vh;
        }
        .subtitle-section{
          padding-inline-start: 1.2em;
          margin-top: 2em;
          margin-bottom: 1.5em;
        }

      `}</style>
    </>
  )

}

export default BoardList
