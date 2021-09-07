import React from 'react';
import { items } from '../utils/ItemsNavBar'

//Components
import BottomNavigationBar from '../components/BottomNavigationBar/BottomNavigationBar'


const MainLayout = ({ children, menuBottom = true, bgDark, clearFit = true }) => {

  return (
    <>
      <main className={`main d-flex flex-column   ${clearFit ? 'clear-fit' : ''}`}>

        {children}
        {menuBottom && <BottomNavigationBar items={items} />}


      </main>
      <style jsx>{`

        .main{
          background-color: ${bgDark ? 'var(--secondary-color)' : '#F5F2F2'};
        }

        .mobile-conatiner{
          max-width: var(--window-width);
        }

      `}</style>
    </>
  )

}

export default MainLayout
