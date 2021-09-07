import React, { Fragment } from 'react';
import Card from '../CardPost/Card'

const SectionPost = () => {

  return (
    <>
      <section className="section-post">

        <h2 className="subtitle-section">Publicaciones</h2>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
      <style jsx scoped>{`

        .section-post{
          padding: 0 1.2em;
          margin-top: 1em
        }
        .section-post .subtitle-section{
          margin-bottom: 16px;
        }

    `}</style>
    </>
  )

}

export default SectionPost
