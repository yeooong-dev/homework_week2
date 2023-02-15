import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeTodos, toggleTodos } from '../redux/modules/todos';


const User = ({item})=> {
  const dispatch = useDispatch()

    return(
      <div key = {item.id} className='content'>
        <div className='buttonbox'>
          <Link style={{
            border:"none",
            fontSize:"1.1rem",
            marginBottom:"10px",
            padding:"3px"
            }} to={`/todos/${item.id}`}>상세보기</Link>
        {item.title}-{item.memo}
          <button className='delete_btn' onClick={()=>dispatch(removeTodos(item))}>삭제</button>
          {item.isDone === false ? <button className='clear_btn' onClick={()=>dispatch(toggleTodos(item))}>완료</button> : <button className='clear_btn' onClick={()=>dispatch(toggleTodos(item))}>취소</button>}
        </div>
        
        
      </div>
    );
  };

  export default User;