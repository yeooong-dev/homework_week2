import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import User from '../components/Users';
import { addTodos, toggleTodos } from '../redux/modules/todos';

//전역
const Home = () => {
    
    const dispatch = useDispatch()

    const userList = useSelector((state)=>state.todos)

    //로컬(해당 컴포넌트 내부)
    const [title, setTitle] = useState('');
    const [memo, setMemo] = useState('');
    
    const titleAddHandler = (event) => {
      setTitle(event.target.value);
    }
    const memoAddHandler = (event) => {
      setMemo(event.target.value);
    }
  
    //dispatch(toggleTodos()) : 괄호를 적지 않으면 함수의 내용을 전달해 주는 것이며, 괄호를 적으면 함수를 실행하겠다!

    
    //추가 버튼
    const clickAddButtonHandler = () => {
      if(title===""||memo==="")return
      dispatch(addTodos({title,memo}))
      setTitle("");
      setMemo("");
        
      //action creator : dispatch의 action을 편하고 정확하게 보내기 위한 함수
      //return => 값이 있으면 return하고 없으면 끝
      //if문 사용 - 값이 없으면 실행 안됨
        
    //   const newUser = {
    //     id,
    //     title : title,
    //     memo : memo,
    //     isDone : false,
    //   }
    //   setUsers([...users, newUser])
    //   setMemo('')
    //   setTitle('')
    }
    
    // //완료 버튼
    // const clickClearButtonHandler = (id) => {
    //   setUsers((users)=> users.map((newUser)=>
    //       newUser.id === id ? {...newUser, checked : !newUser.checked } : newUser
    //   ));
    // };
    
      return (
      <div className='center'>
        <div className="div_box">
          <h1 className='title'>Todo List</h1>
          <div className='i_style'>
            <input className='title_style' type="text" placeholder="제목" value={title} onChange={titleAddHandler} />
            <input className='subtitle_style' type="text" placeholder="내용" value={memo} onChange={memoAddHandler} />
            <button onClick={clickAddButtonHandler} className='btn'>추가하기</button>
          </div>
    
          <div className='content'>
            <div className='m'>
              <h1>Doing</h1>
              {userList.users.filter(v=>v.isDone === false).map(function(item){
              return <User className="bg_style" key={item.id} item = {item} />;
              
              })}
              <h1 className='clear'>Done</h1>
              {userList.users.filter(v=>v.isDone === true).map(function(item){
              return <User className="bg_style" key={item.id} item = {item} />;
              
              })}
            </div>
          </div>
        </div>
      </div>
      )
}

export default Home