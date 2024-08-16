import styled from 'styled-components';

const RollDice = (props) => {
  return (
    <RollDiceContainer>
      <div className="dice" onClick={props.rollDice}>
        <img src={`/images/dice_${props.currentDice}.png`} alt={`dice${props.currentDice}`} />
      </div>
      <p>Click on Dice to roll</p>
    </RollDiceContainer>
  );
};

export default RollDice;

const RollDiceContainer = styled.div`
    margin-top: 48px;
    display: flex;
    align-items: center;
    flex-direction: column;

    .dice {
        cursor: pointer;
    }

    p {
        font-size: 24px;
    }
`;
