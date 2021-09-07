import React, { useState } from 'react';
import dynamic from 'next/dynamic'

import 'react-quill/dist/quill.snow.css'

import UploadImage from '../Form/UploadImage';
import Input from '../Form/Input';


const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
})

const editorTextmodules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image', 'video'],
    ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
}


const editorFormats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
]

const BodyPost = () => {

  const [editorText, setEditorText] = useState('')
  return (
    <>
      <section className="form-wrapper">
        <form className="form-post">
          <Input label="Titulo" name="title" />
          <div className="form-post-group">
            <label className="subtitle-section">Agrega una imagen de portada</label>
            <UploadImage />

          </div>

          <div className="form-post-group">
            <label className="subtitle-section">Descripción general</label>
            <div className="description-box">
              <QuillNoSSRWrapper modules={editorTextmodules} formats={editorFormats} theme="snow" value={editorText} onChange={(e) => setEditorText(e)} />

            </div>
          </div>
        </form>
      </section>

      <style jsx scoped>{`

            .form-wrapper{
              padding: 1.2em 1.6em;
              min-height: 100vh;
              border-top-right-radius: var(--br-radius-sections);
            border-top-left-radius: var(--br-radius-sections);
              background-color: #F3F3F3;
              margin-top: 1.3em;

            }


            .description-box{
              contain: layout paint;
              background-color: #fff;
              margin-top: .4em;
            }

        `}</style>

    </>
  )
}

export default BodyPost
