import React from 'react';


const TagListPost = () => {
  return (
    <>
      <section className="d-flex tag-list-post">
        {
          [1, 2, 3].map((item, key) => (
            <div key={key} className="tag-post ">
              <div className="d-flex align-items--center">
                <span className="tag-post-title">Etiqueta 1</span>


                <svg className="tag-post-button" stroke="currentColor" fill="#4FB848" strokeWidth={0} baseProfile="tiny" viewBox="0 0 24 24" height="1.2em" width="1.2em" ><path d="M12 4c-4.419 0-8 3.582-8 8s3.581 8 8 8 8-3.582 8-8-3.581-8-8-8zm3.707 10.293c.391.391.391 1.023 0 1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-2.293-2.293-2.293 2.293c-.195.195-.451.293-.707.293s-.512-.098-.707-.293c-.391-.391-.391-1.023 0-1.414l2.293-2.293-2.293-2.293c-.391-.391-.391-1.023 0-1.414s1.023-.391 1.414 0l2.293 2.293 2.293-2.293c.391-.391 1.023-.391 1.414 0s.391 1.023 0 1.414l-2.293 2.293 2.293 2.293z" /></svg>


              </div>
            </div>
          ))
        }

      </section>

      <style jsx scoped>{`
            .tag-list-post{
              padding: .8em;
              width: fit-content;
              border-radius: .1em;
              background-color: #7A78C9;
              margin-top: .6em;
            }
            .tag-post{
              display: inline-block;
              padding: .2em .6em;
              margin-right: 5px;
              border-radius: calc(var(--br-radius) / 2);
              background-color: #122B3D;
            }
            .tag-post-title{
              color:#fff;
              font-size: .8rem;
            }

            .tag-post-button{
              margin-left: 5px
            }

        `}</style>

    </>
  )
}

export default TagListPost
