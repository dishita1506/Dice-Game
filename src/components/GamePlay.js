import React, { useState } from 'react';
import TotalScore from './TotalScore';
import NumberSelector from './NumberSelector';
import styled from 'styled-components';
import RollDice from './RollDice';
import Rules from './Rules';

// Import Button from styled-components or any other library
// import { Button } from '../styled/Button';

function GamePlay() {
  const [score, setScore] = useState(0);
  const [selectedNum, setSelectedNum] = useState(undefined);
  const [currentDice, setCurrentDice] = useState(1);
  const [err, setErr] = useState("");
  const [showRules,setShowRules]=useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const rollDice = () => {
    if (!selectedNum) {
      setErr("OOPS, You have not selected any number!");
      return;
    }

    const randomNumber = generateRandomNumber(1, 6);
    setCurrentDice(randomNumber);

    if (selectedNum === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNum(undefined);
  };

  const resetScore=()=>{
    setScore(0);
  }

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector selectedNum={selectedNum} setSelectedNum={setSelectedNum} err={err} setErr={setErr} />
      </div>
      <RollDice currentDice={currentDice} rollDice={rollDice} />
      <div className='btns'>
        <Button onClick={resetScore}>Reset</Button>
        <Button onClick={()=>setShowRules(!showRules)}>{showRules?"Hide":"Show"} Rules</Button>
         {
          showRules && <Rules/>
         }
      </div>
    </MainContainer>
  );
}

export default GamePlay;

const MainContainer = styled.main`
    padding-top: 70px;
    .btns{
    display:flex;
    flex-direction:column;
    align-items: center;
    gap:10px;
    margin-top:20px;
    }
    .top_section {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    
`;
const Button = styled.button`


padding:10px 18px;

min-width:220px;
height:44px;
background:black;
border-radius:5px;
color:white;
border:none;
font-size:16px;
cursor:pointer;
border:1px solid transparent;
&:hover{
background-color:white;
border:1px solid black;
color:black;
transition:0.3s background ease;
}
`
