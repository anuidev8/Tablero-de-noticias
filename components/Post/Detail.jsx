import React from 'react';
import Image from 'next/image'

const PostDetail = () => {

  return (
    <>
      <div className="post-detail">
        <div className="post-detail-image">
          <Image src="https://cdn.pixabay.com/photo/2014/05/03/00/46/notebook-336634__340.jpg" layout="fill" objectFit="cover" />
        </div>
        <section className="post-detail-content">
          <h3 className="subtitle-section post-detail-title subtitle-section--whit-line f--bold">Descripción</h3>
          <p className="post-detail-paragrahp">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          </p>
          <p className="post-detail-paragrahp">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          </p>
          <div className="image">
            <Image src="https://cdn.pixabay.com/photo/2019/12/10/16/35/chain-aviator-4686144__340.jpg" layout="fill" objectFit="cover" />

          </div>
        </section>

      </div>

      <style jsx scoped>{`

            .post-detail{
              background-color: #fff;
              min-height: 100vh
            }

            .post-detail-image{
              position: relative;
              width: 100;
              height: 240px;
              margin-top: 80px;
            }
            .post-detail-content{
              padding: 1.5em 2.25em;
            }
            .post-detail-title{
              position: relative;
              color: var(--purple-color);

            }
            .post-detail-paragrahp{
              margin-top: 1.4em;
            }

            .image{
              position: relative;
              height: 208px;
              margin-top: 2em;
            }

        `}</style>
    </>
  )

}

export default PostDetail
