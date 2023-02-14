//모듈

export const ADD_TODOS = "todos/ADD_TODOS"
export const TOGGLE_TODOS = "todos/TOGGLE_TODOS"
export const REMOVE_TODOS = "todos/REMOVE_TODOS"

//action creator
export const addTodos = (payload) => {
    return {
        type:ADD_TODOS,
        payload,
    }
}

export const toggleTodos = (payload) => {
    return {
        type:TOGGLE_TODOS,
        payload,
    }
}

export const removeTodos = (payload) => {
    return {
        type:REMOVE_TODOS,
        payload,
    }
}

export const initialState = {
    counter : 1,
    users : [
        {
            // id : 0,
            // title : "title",
            // memo : "memo",
            // isDone : false,
        }
    ]
}

//리듀서
const todos = (state = initialState, action) => {
    switch(action.type){
        case ADD_TODOS:
            return {counter:state.counter+1, users:[...state.users,{id:state.counter, ...action.payload, isDone:false}]}
        case TOGGLE_TODOS:
            const toggleArr = [...state.users.map((v)=>v.id===action.payload.id?{...v,isDone:!action.payload.isDone}:v)]
            return {counter:state.counter, users:toggleArr};
        case REMOVE_TODOS:
            const removeArr = [...state.users.filter((v)=>v.id!==action.payload.id)]
            return {counter:state.counter, users:removeArr};
        default :
            return state;
    }

}


export default todos;

//dispatch가 보낸 action 객체를 받아서 처리하는 함수가 reducer다.
//들여쓰기 잘하자