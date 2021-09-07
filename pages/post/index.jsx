import React from 'react';
import BodyPost from '../../components/Post/BodyPost';

//components
import HeaderPosts from '../../components/Post/HeaderPostView';


const Posts = () => {

  return (
    <>
      <main className="create-post-main">
        <HeaderPosts />
        <BodyPost />
        <button className="publish-btn d-flex justify-content">
          PUBLICAR
          <i className="publish-btn-icon">
            <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" height="1.8em" width="1.8em" ><path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z" /></svg>
          </i>
        </button>
      </main>

      <style jsx scoped>{`

          .create-post-main{
            position: relative;
            min-height: 100vh;
          }
          .publish-btn{
            position: fixed;
            width: 100%;
            height: 60px;
            bottom: 0;
            left: 0;
            border:none;
            border-top-right-radius: var(--br-radius-sections);
            border-top-left-radius: var(--br-radius-sections);
            background-color: var(--primary-color);
            color: #fff;
            font-size: 1.5rem;
            text-align: center;
          }
          .publish-btn-icon{
            margin-left: .5em;
          }

      `}</style>
    </>
  )

}


export default Posts
