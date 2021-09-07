import { categotysActionTypes } from './actions'

export default function reducer(state={},action){

      switch (action.type) {
        case categotysActionTypes.LOAD_CATEGORYS:

            return Object.assign({},state,{
              categorys:action.categorys
            })

        default:
          return state;
      }

}
