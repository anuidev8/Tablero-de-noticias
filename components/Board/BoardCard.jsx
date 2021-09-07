import React from 'react';
import Image from 'next/image'

import ProfileImage from '../Profile/ProfileImage'

const BoardCard = () => {
  return (
    <>
      <article className="card-post">
        <div className="card-post-image">
          <Image src="https://cdn.pixabay.com/photo/2014/05/03/00/46/notebook-336634__340.jpg" layout="fill" objectFit="cover" />
        </div>
        <div className="card-post-info">
          <h3 className="card-post-title">Lorem ipsum dolor sit amet</h3>
          <div className="board-users d-flex">
            <div className="board-user">
              <ProfileImage size={'22px'} path="https://cdn.pixabay.com/photo/2017/05/12/11/29/girl-2306829__340.jpg" />
            </div>
            <div className="board-user">
              <ProfileImage size={'22px'} path="https://cdn.pixabay.com/photo/2017/05/12/11/29/girl-2306829__340.jpg" />
            </div>
            <div className="board-user">
              <ProfileImage size={'22px'} path="https://cdn.pixabay.com/photo/2017/05/12/11/29/girl-2306829__340.jpg" />
            </div>
            <div className="board-user d-flex">
              <ProfileImage size={'22px'} path="https://cdn.pixabay.com/photo/2017/05/12/11/29/girl-2306829__340.jpg" />
              <span className="counter-user">+ 4</span>
            </div>
          </div>
          <div className="board-code">
            <span className="board-code-baged">34455</span>
            <span>code</span>
          </div>
        </div>
      </article>
      <style jsx scoped>{`

      .card-post{
        position: relative;
        contain: layout paint;
        width: 100%;
        height: 223px;
        border-radius: .8em;
        text-align: start;

      }
      .card-post::before{
        content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(to top,rgb(18, 43, 61,.7),rgb(18, 43, 61,.1));
          z-index: 1;
      }
          .card-post-image{
            margin:0;
          height: inherit;
      }

          .card-post-info{
            position: absolute;
          bottom:8%;
          left: 0;
          padding: 0 1.5em;
          color: #fff;
          z-index: 2;
      }
          .card-post-title{
            font - size: 1.1rem;

      }
          .card-post-details{
            margin - top: 8px;
      }
          .card-post-detail-item{
            margin - right: 12px;
      }
          .card-post-detail-item span{
            font - size: .7rem;
          margin-left: 3px;
      }

      .board-user{
        margin-top: 8px;
      }
      .board-user{
        position: relative;
      }
     .board-users .board-user:nth-child(2){
        left: -14px;
      }
      .board-users .board-user:nth-child(3){
        left: -24px;
      }
      .board-users .board-user:nth-child(4){
        left: -34px;
      }

      .counter-user{
        
        color: #fff;
        margin-top: 5px;
        margin-left: 2px;
        font-size: .9rem;
      }

      .board-code{
        display: flex;
        flex-direction: column;
        position: absolute;
        bottom: -10%;
        right: 5%;
        font-size: .8rem;
        text-align: center;

      }
      .board-code-baged{
        padding: 0 1em;
        background-color: var(--primary-color);
        border-radius: .8em;
        font-size: .8rem;

      }
     

      `}</style>
    </>
  )
}
export default BoardCard
