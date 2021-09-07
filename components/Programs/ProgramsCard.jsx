import React from 'react';

const ProgramsCard = ({ icon, title }) => {

  return (
    <>
      <button className="programs-card">
        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="2.5em" width="2.5em" ><g><path fill="none" d="M0 0h24v24H0z" /><path d="M4 16h16V5H4v11zm9 2v2h4v2H7v-2h4v-2H2.992A.998.998 0 0 1 2 16.993V4.007C2 3.451 2.455 3 2.992 3h18.016c.548 0 .992.449.992 1.007v12.986c0 .556-.455 1.007-.992 1.007H13z" /></g></svg>
        <span className="programs-card-title">Lic. Informática y medios audio visuales</span>
      </button>

      <style jsx scoped>{`

              .programs-card{
                --timing-transition:.2s;
                display: flex;
                align-items: center;
                width: 100%;
                padding: 1em .6em .8em ;
                margin-top: 2.2em;
                background-color: transparent;
                border:1px solid var(--purple-color) ;
                border-radius: .5em;
                color: var(--purple-color);
                cursor: pointer;
                transition: background-color var(----timing-transition) ,
                            color var(--timing-transition),
                            box-shadow   var(--timing-transition);
              }
              .programs-card:hover{
                background-color: var(--purple-color);
                color: #fff;
                box-shadow: 0px 3px 6px #00000029;
              }
              .programs-card-title{
                margin-left: 5px;
                font-size: 1.063rem;
                font-weight: 100;
              }

          `}</style>
    </>
  )

}

export default ProgramsCard
