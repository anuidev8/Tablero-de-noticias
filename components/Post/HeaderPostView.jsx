import React from 'react';
import Link from 'next/link'

//components
import PreviusArrow from '../../components/Icons/PreviusArrow';
import Categorys from '../Categorys/CategorySlider'
import TagListPost from '../Tags/TagListPost';
import CustomSelect from '../CustomSelect';



//data example

const options = [
  {
    value: 'board1',
    name: 'board 1'
  },
  {
    value: 'board1',
    name: 'board 2'
  },
  {
    value: 'board1',
    name: 'board 2'
  },
]


const HeaderPosts = () => {

  return (
    <>
      <header className="header-post w-100">
        <nav className="header-options d-flex w-100" >
          <div className="wrapper-nav d-flex w-100">
            <div className="title-header">
              <Link href="/">
                <a className="d-flex align-items--center">
                  <PreviusArrow size={25} />
                  <h1 className="section-title">Crear post</h1>
                </a>
              </Link>
            </div>
            <form className="d-flex type-post-form">
              <div className="input-radio-group d-flex align-items--center">
                <input className="input-radio" type="radio" id="public" name="type" value="public" checked readOnly />
                <label className="radio-label">Publico</label>
              </div>
              <div className="input-radio-group d-flex align-items--center">
                <input className="input-radio" type="radio" id="private" name="type" value="private" />
                <label className="radio-label" htmlFor="private">Privado</label>
              </div>
            </form>

          </div>

        </nav>

        <h2 className="subtitle-section">Selecciona una categoría</h2>
        <div className="wrapper-slider">
          <Categorys />
        </div>
        <div className="tags">
          <h2 className="subtitle-section subtitle-section--tag">Añade nuevas etiquetas</h2>
          <TagListPost />
        </div>

        <div className="assign">
          <h2 className="subtitle-section subtitle-section--tag">Asignar a un tablero o crear uno nuevo</h2>
          <div className="d-flex">
            <div className="select-box">
              <CustomSelect options={options} />
            </div>
            <div className="create-btn-box">
              <button className="create-table-btn w-100">Crear Tablero</button>
            </div>
          </div>
        </div>

      </header>
      <style jsx scoped>{`

          .header-post{
            position: relative;
            padding-bottom: 2em;
            border-bottom-right-radius: var(--br-radius-sections);
            border-bottom-left-radius: var(--br-radius-sections);
            background-color: var(--purple-color);
          }

          .header-options{
            padding-bottom: .5em;
            border-bottom: 1px solid #fff;
          }

          .wrapper-nav{
            padding: 1em 1.6em;
          }



          .section-title{
            margin-left: 7px;
            width: auto
          }



          .title-header{
            flex-grow: 1;
          }
          .input-radio-group{
            margin-right: 14px;
          }

          .input-radio{
            width: 1.2rem;
            background: white;
          }

          .radio-label{
            color: white;
            margin-left: 3px;

          }
          .type-post-form{
              padding-right: .2em
          }
          .subtitle-section{
            padding-left: 1.6em;
            margin-top: 1.6em;
            color: white;
          }

          .subtitle-section--tag{
            margin-top: .5em;
            padding: 0;
          }
          .tags{
            padding: 0 1.6em;
          }

          .wrapper-slider{
            contain: layout paint;
          }

          .assign{
            padding: 0 1.6em;
            margin-top: 1.5em;
          }
          .assign .subtitle-section{
            margin-bottom: .5em;
          }
          .select-box{
            flex-grow: 1;
          }

          .create-btn-box{
            flex-grow: 1;
            padding:  0  1.5em 0 1em;
          }

          .create-table-btn{
            padding: .3em 1.7em;
            border-radius: 1.5em;
            border:none;
            background-color: #fff;
            font-size: .9rem;
          }

      `}</style>
    </>
  )

}


export default HeaderPosts
