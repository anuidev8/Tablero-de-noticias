

const ButtonFilter = ({ bg, title, onClick, styles }) => {

  return (

    <>
      <button style={styles} onClick={onClick} className="btn btn-filter">
        {title}
      </button>

      <style jsx>{`

                    .btn-filter{
                      padding: .3em 1.22em;
                      border-radius: 19px;
                      margin-right: 14px;
                      background-color: ${bg || 'white'};
                      font-weight: 100;
                      color:${bg ? 'white' : 'inherit'};
                      box-shadow: 0 1px 4px rgba(0,0,0,.1)
                    }

                `}</style>
    </>

  )
}

export default ButtonFilter
