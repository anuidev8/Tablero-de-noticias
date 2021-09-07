import React from 'react';
import Image from 'next/image'
import Link from 'next/link'

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

const CardPost = ({ title, image, date, username, comments }) => {

  return (
    <>
      <Link href="/post/sxd445-rr5cf">
        <article className="card-post">
          <>
            <div className="card-post-image">
              <Image loader={myLoader} property={'true'} placeholder="blur" src="https://cdn.pixabay.com/photo/2014/05/03/00/46/notebook-336634__340.jpg" layout="fill" objectFit="cover" />
            </div>
            <div className="card-post-info">
              <h3 className="card-post-title">Lorem ipsum dolor sit amet, consetetur</h3>
              <footer className="card-post-details d-flex">
                <div className="card-post-detail-item card-post-detail-date ">

                  <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 1024 1024" height=".8em" width=".8em"><path d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z" /></svg>
                  <span>02/05/2021</span>
                </div>
                <div className="card-post-detail-item card-post-detail-user ">

                  <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" height=".8em" width=".8em" ><path d="M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z" /></svg>
                  <span>By El maquina</span>
                </div>
                <div className="card-post-detail-item card-post-detail-comment ">

                  <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" height=".8em" width=".8em" ><path d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32zM128 272c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z" /></svg>
                  <span>4 Comentarios</span>
                </div>
              </footer>
            </div>
          </>
        </article>
      </Link>
      <style jsx scoped>{`

            .card-post{
              position: relative;
               contain: layout paint;
               height: 208px;
               border-radius: 1.2em;
               margin-top: 2em;

            }
            .card-post::before{
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background-color: rgba(0,0,0,.35);
              z-index: 1;
            }
            .card-post-image{
               margin:0;
               height: inherit;
            }

            .card-post-info{
              position: absolute;
              top: 50%;
              left: 0;
              padding: 0 1.5em;
              transform: translateY(-50%);
              color: #fff;
              z-index: 2;
            }
            .card-post-title{
              font-size: 1.25rem;

            }
            .card-post-details{
              margin-top: 8px;
            }
            .card-post-detail-item{
              margin-right: 12px;
            }
            .card-post-detail-item span{
              font-size: .7rem;
              margin-left: 3px;
            }

        `}</style>
    </>
  )

}

export default CardPost
