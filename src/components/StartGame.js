import styled from 'styled-components';

// Import Button from styled-components or any other library
// import { Button } from '../styled/Button'; // Adjust the import path based on your project structure

const StartGame = (props) => {
    return (
        <Container>
            <div>
                <img src="https://pngimg.com/uploads/dice/dice_PNG113.png" alt="dice img" style={{ height: "400px", width: "402px" }} />
            </div>

            <div>
                <div className='content'>
                    <h1>Dice Game</h1>
                    <Button onClick={props.toggle}>Play Now</Button>
                </div>
            </div>
        </Container>
    );
}

export default StartGame;

const Container = styled.div`
    max-width: 1180px;
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;

    .content {
        h1 {
            font-size: 86px;
            white-space: nowrap;
        }
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

