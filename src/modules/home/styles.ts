import styled from "styled-components";

export const HomeContainer = styled.div`
    display:flex;
    height: 100%;
    width: 100%;
    margin-left: 30px;
    justify-content: space-between;
    margin-top: 40px;
    padding: 30px 0;
    @media screen and (max-width: 982px){
        flex-direction: column;
        margin-left: 0;
        padding: 0 10px;
    }
    

`;
export const InformationSectionContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 20px;
    width: 100%;
    max-width: 600px;
    flex:1;
    @media screen and (max-width: 982px){
        align-self: center;
    }
`;
export const EarnInfo = styled.p`
    color: white;
    font-family: Fahkwang;
    font-size: 30px;
    align-self: flex-start;
    text-align:left;
    width: 100%;
    @media screen and (max-width: 1400px){
        font-size: 20px;
        width: 80%;
        text-align: center;
        align-self:center;
    }
`;

export const InformationTitle = styled.h3`
    font-size: 80px;
    color: white;
    width: 100%;
    letter-spacing: 1.7px;
    align-self: center;
    @media screen and (max-width: 982px){
        font-size: 40px;
        width: 80%;
        text-align: center;
    }
    @media screen and (max-width: 600px){
        font-size: 30px;
        width: 80%;
    }
`;
export const ExploreMoreButton = styled.button`
    clip-path: polygon(0 23%, 22% 0, 100% 0, 100% 78%, 80% 100%, 0 100%);
    -webkit-clip-path: polygon(0 23%, 22% 0, 100% 0, 100% 78%, 80% 100%, 0 100%);
    padding: 10px 20px;
    font-size: 27px;
    color:white;
    min-width: 250px;
    border: 0;
    outline: 0;
    background-color: #2CA0E2;
    &:hover{
        cursor: pointer;
        outline: 0;
        border: 0;
    }
    @media screen and (max-width: 600px){
        max-width: 200px;
        align-self:center;
        font-size: 16px;
        min-width: 140px;
    }
`;
export const JoinDiscordButton = styled.button`
     border: 0;
    outline: 0;
    padding: 10px 20px;
    padding-left: 0;
    z-index: 10;
    min-width: 250px;
    color: rgba(43, 160, 226, 1);
    font-size: 24px;
    background-color: transparent;
    &:hover{
        cursor: pointer;
        outline: 0;
        border: 0;
    }
    @media screen and (max-width: 600px){
        max-width: 200px;
        align-self:center;
        padding-left: 20px;
        font-size: 16px;
        min-width: 140px;
    }
`;
export const InfoButtonsSection = styled.div`
    display: flex;
    justify-content: space-evenly;
    gap: 20px;
    margin-top: 70px;
    align-self: center;


    width: 80%;
    @media screen and (max-width: 600px){
        flex-direction: column;
        width: 100%;
        margin-top: 40px;
        align-self: center;
        justify-content: center;
    }
`;