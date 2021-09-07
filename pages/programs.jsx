import React from 'react';

import OptionsLayout from '../layout/OptionsLayout'
import ProgramsCard from '../components/Programs/ProgramsCard'

const Programs = () => {

  return (
    <OptionsLayout title={'Programas'}>
      <>
        <h2 className="section-title section-title--dark">Selecciona un programa</h2>
        <ProgramsCard />
        <ProgramsCard />
        <ProgramsCard />
        <ProgramsCard />
        <ProgramsCard />
        <ProgramsCard />
      </>
    </OptionsLayout>
  )

}


export default Programs
