import React from 'react';

import Tag from './Tag'
const TagList = ({ tags }) => {

  return (
    <>
      <div className="tag-list">
        <div className="tag-list-item">
          <Tag />
        </div>
        <div className="tag-list-item">
          <Tag />
        </div>
        <div className="tag-list-item">
          <Tag />
        </div>
        <div className="tag-list-item">
          <Tag />
        </div>
      </div>
      <style jsx scoped>{`

            .tag-list{
              display: grid;
              grid-template-columns: 1fr 1fr;
              column-gap: 2.5em;
              width: 100%;
              margin-top: 1.6em;
            }
            .tag-list-item{
              display: flex;
              justify-content: center;
              margin-bottom:2.2em;
            }

        `}</style>
    </>
  )

}

export default TagList
