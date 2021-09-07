import React from 'react';
import Link from 'next/link'
const Button = ({ title, className, bg, isLink, router = "/", onClick }) => {

  return (
    <>
      {
        isLink ?
          <Link href={router}>
            <button className={`m-button ${className || ''}`}>
              {title}
            </button>
          </Link >
          : <button className={`m-button ${className}`} onClick={onClick}>
            {title}
          </button>
      }

      <style jsx>{`

           .m-button{
             padding: .62em 3.3em;
             background-color:${bg || 'var(--primary-color)'} ;
             border:none;
             border-radius: 1.5em;
             color: #fff;
             font-size: 1.25em;
             font-weight: lighter;
           }

      `}</style>
    </>
  )

}

export default Button
