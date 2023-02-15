import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'

// 위에 고정

const StMain = styled.div`
    position:relative;
    width:1200px;
    height:1080px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color:#f6f6f6;
    margin-top:50px;
    border-radius:20px;
    box-shadow: 6px 7px 5px 0px rgba(0,0,0,0.22);
    -webkit-box-shadow: 6px 7px 5px 0px rgba(0,0,0,0.22);
    -moz-box-shadow: 6px 7px 5px 0px rgba(0,0,0,0.22);
`

const StDiv = styled.div`
    position:absolute;
    top:500px;
    font-size:2rem;
    
`
const StBtn = styled.button`
    width:160px; height:50px;
    background-color:rgb(44, 43, 52);
    border-radius:30px;
    font-size:1.2rem;
    font-weight:bold;
    border:none;
    color:white;
    cursor:pointer;
`

const StBox = styled.div`
    position:absolute;
    top:60px;
    width:80%;
    padding:30px;
    box-sizing: border-box;
    align-items: center;
    display:flex;
    justify-content:space-between;
    border-bottom:1px solid rgb(44, 43, 52);
    margin-bottom:600px;
`

const StId = styled.div`
    width:50px; height:50px;
    text-align:center;
    line-height:53px;
    font-size:2rem;
    background-color:rgb(44, 43, 52);
    border-radius:50%;
    color:white;
`

const StTitle = styled.div`
    font-size:${(props) => props.fontSize}
`



function Todos() {
    const data = useSelector(state=>state.todos)
    const params = useParams()
    const findData = data.users.find(v=>v.id===Number(params.id))
    const navigate = useNavigate()

  return (
    <StMain>
        <StBox>
          <StId>
             {findData.id}
          </StId>

          <StBtn onClick={()=>navigate(-1)}>뒤로가기</StBtn>
        </StBox>  

        <StDiv>
          <StTitle fontSize="3rem;">
            {findData.title}
          </StTitle>

          <StTitle fontSize="2rem;">
             {findData.memo}
          </StTitle>
        </StDiv>

          
    </StMain>
    
    
  )
}

export default Todos

