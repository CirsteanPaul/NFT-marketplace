import styled from "styled-components";

export const MainSection = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    padding: 20px;

`;
export const MarketPlaceContainer = styled.div`
    width: 100vw;
    display: grid;
    padding: 50px;
    margin-top: 100px;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, 250px);
    grid-gap: 140px;
    grid-row-gap: 250px;
    margin-bottom: 20px;
`