import React from 'react';
import Link from 'next/link'

import styles from './style.module.css'


const BottomNavigationBar = ({ items }) => {

  const lg = () => console.log('is loger')
  return (
    <nav className={styles.BottomNavigationBar}>
      <ul className={`d-flex align-items--center ${styles.BottomNavigationBarWrapper}`}>
        {
          items.map((item, key) => (


            <Link key={key} href={item.path}>
              <li className={`d-flex justify-content--center flex-column ${styles.itemsBottomNavigation}`}>

                <>
                  <i className={`d-flex justify-content--center  ${styles.iconBottomNavigation}`}>
                    {item.icons}
                  </i>
                  <span style={{ color: '#fff' }}>{item.name}</span>
                </>

              </li>
            </Link>
          ))
        }
        <Link href="/post">
          <a role="button" className={`d-flex justify-content ${styles.createButton}`}>
            <svg stroke="currentColor" fill="currentColor" strokeWidth={0} t={1551322312294} viewBox="0 0 1024 1024" height="2.5rem" width="2.5rem" ><defs /><path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z" /><path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z" /></svg>
          </a>
        </Link>

      </ul>
    </nav>
  )

}

export default BottomNavigationBar
