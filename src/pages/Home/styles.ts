import styled from 'styled-components';

export const Container = styled.div`
    padding: 48px;
    /* max-width: 1500px; */
    margin: auto;
`;

export const PokemonList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 272px);
    place-items: center;

    justify-content: space-between;

    gap: 16px;

    @media (max-width: 950px) {
        justify-content: space-around;
    }
`;

export const NotFound = styled.p`
    text-align: center;
    text-transform: none;

    padding: 12px;
    border-radius: 8px;


    margin: 24px auto 0;
`;

export const Button = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: fit-content;

padding: 12px;
border-radius: 8px;

font-weight: bold;
color: #FFF;
background-color: #BF0A0A;

margin: 24px auto 0;

cursor: pointer;
`;