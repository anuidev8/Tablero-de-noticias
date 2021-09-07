
import React from 'react';
import { useRouter } from 'next/router';

//Components
import Button from './ButtonFilter'
const Programs = () => {
  const router = useRouter()
  return (

    <Button title="Programas" bg="#122B3D" styles={{ marginRight: '1.2em' }} onClick={() => router.push('/programs')} />



  )

}

export default Programs
