export const categotysActionTypes = {

  LOAD_CATEGORYS:'LOAD_CATEGORYS'

}

export const loadCategorys = () =>{

  return dispatch => new Promise((resolve,reject)=>
  {



        dispatch({type:categotysActionTypes.LOAD_CATEGORYS,categorys:['events','acreditación']})
        resolve(true)


  }

)

}
