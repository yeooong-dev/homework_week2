import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodos, toggleTodos } from '../redux/modules/todos';

const User = ({item})=> {
  const dispatch = useDispatch()

    return(
      <div key = {item.id} className='content'>
        <div className='buttonbox'>
        {item.title}-{item.memo}
          <button className='delete_btn' onClick={()=>dispatch(removeTodos(item))}>삭제</button>
          {item.isDone === false ? <button className='clear_btn' onClick={()=>dispatch(toggleTodos(item))}>완료</button> : <button className='clear_btn' onClick={()=>dispatch(toggleTodos(item))}>취소</button>}
        </div>
        
        
      </div>
    );
  };

  export default User;