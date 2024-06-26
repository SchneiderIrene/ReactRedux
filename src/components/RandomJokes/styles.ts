import styled from '@emotion/styled';

export const RandomJokesContainer = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 background: #2f5a6e;
 flex: 1;
`

export const JokeCard = styled.div`
display: flex;
 flex-direction: column;
 align-items: center; 
 gap: 20px;
 width: 700px;
 min-height: 400px;
 max-height: fit-content;
 background: aliceblue;
 border-radius: 10px;
 padding: 20px;

`

export const ButtonContainer = styled.div`
width: 300px;
`

export const JokeText = styled.p`
font-size: 24px;
font-weight: bold;
`