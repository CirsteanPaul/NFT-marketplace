import styled from "styled-components";

export const MainSection = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items:center;
    padding: 20px;

`;
export const PageTitle = styled.h3`
    margin-bottom: 20px;
    text-align: center;
    font-size: 70px;
    color: white;
    width: 100%;
    letter-spacing: 1.7px;
    @media screen and (max-width: 620px){
        font-size: 35px;
    }
`;
export const MarketPlaceContainer = styled.div`
    width: 100%;
    display: grid;
    padding: 30px;
    margin-top: 50px;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, 250px);
    grid-gap: 140px;
    grid-row-gap: 290px;
    margin-bottom: 20px;
    @media screen and (max-width: 520px){
    grid-template-columns: repeat(auto-fill, 250px);
    grid-row-gap: 210px;
    }
`