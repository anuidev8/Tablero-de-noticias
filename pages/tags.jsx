import React from 'react';

import OptionsLayout from '../layout/OptionsLayout'
import TagList from '../components/Tags/TagList'

const Tags = () => {

  return (
    <OptionsLayout title={'Etiquetas'}>
      <>
        <h2 className="section-title section-title--dark">Selecciona una etiqueta</h2>
        <TagList />

      </>
    </OptionsLayout>
  )

}


export default Tags
