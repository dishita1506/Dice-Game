import styled from 'styled-components';

function NumberSelector(props) {
  const numberArray = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (val) => {
    props.setSelectedNum(val);
    props.setErr("");
  };

  return (
    <NumberSelectorContainer>
      <p className='err'>{props.err}</p>
      <div className='flex'>
        {numberArray.map((val, index) => (
          <Box key={index} onClick={() => numberSelectorHandler(val)} isSelected={val === props.selectedNum}>{val}</Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
}

export default NumberSelector;

const NumberSelectorContainer = styled.div`
    display: flex;
    align-items: end;
    flex-direction: column;

    .flex {
        display: flex;
        gap: 24px;
    }

    p {
        font-size: 24px;
        font-weight: 700;
    }

    .err {
        color: red;
        font-weight: 300;
    }
`;

const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props) => (props.isSelected ? "black" : "white")};
    color: ${(props) => (!props.isSelected ? "black" : "white")};
`;
