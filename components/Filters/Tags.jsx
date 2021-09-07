

import React from 'react';
import { useRouter } from 'next/router';

//Components
import Button from './ButtonFilter'
const Etiquetas = () => {
  const router = useRouter()
  return (
    <Button title="Etiquetas" onClick={() => router.push('/tags')} />
  )

}

export default Etiquetas
