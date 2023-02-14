import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'

function Todos() {
    const data = useSelector(state=>state.todos)
    const params = useParams()
    const findData = data.users.find(v=>v.id===Number(params.id))
    const navigate = useNavigate()

  return (
    <div>
        <StDiv>
        {findData.id}
        {findData.title}
        {findData.memo}
        </StDiv>
      <button onClick={()=>navigate(-1)}>뒤로가기</button>
    </div>
  )
}

export default Todos

const StDiv = styled.div`
    font-size:1.5rem;
`
