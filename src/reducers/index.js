import {
    ADD_POST
} from '../actions';

const initialState = {
    Post:{
        id: 1,
        dataCriacao: '01/05/2018',
        title: 'Redux',
        body: 'loren Ipsum',
    }
}

function post(state = initialState, action){
    const { post, title } = action
    switch (action.type) {
      case ADD_POST :
         return {
           ...state,
            [title]: post.name,
         }
      default :
       return state
      }

}

export default post;