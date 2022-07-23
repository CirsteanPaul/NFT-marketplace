import styled from "styled-components";

export const HomeContainer = styled.div`
    display:flex;
    height: 100%;
    width: 100%;
    margin-left: 30px;
    gap: 30px;
    margin-top: 60px;
    padding: 40px 0;
    @media screen and (max-width: 982px){
        flex-direction: column;
        margin-left: 0;
        padding: 0 10px;
    }
    

`;
export const InformationSectionContainer = styled.div`
    display:flex;
    flex-direction: column;
    gap: 20px;
    flex:1;
`;
export const EarnInfo = styled.p`
    color: white;
    font-family: Fahkwang;
    font-size: 30px;
    width: 100%;
    @media screen and (max-width: 600px){
        font-size: 20px;
        width: 80%;
    }
`;

export const InformationTitle = styled.h3`
    font-size: 80px;
    color: white;
    width: 100%;
    letter-spacing: 1.7px;
    @media screen and (max-width: 1400px){
        font-size: 40px;
        width: 80%;
    }
    @media screen and (max-width: 600px){
        font-size: 30px;
        width: 80%;
    }
`;
export const ExploreMoreButton = styled.button`
    clip-path: polygon(0 23%, 22% 0, 100% 0, 100% 78%, 80% 100%, 0 100%);
    -webkit-clip-path: polygon(0 23%, 22% 0, 100% 0, 100% 78%, 80% 100%, 0 100%);
    padding: 10px 30px;
    font-size: 27px;
    color:white;

    border: 0;
    outline: 0;
    background-color: cyan;
    &:hover{
        cursor: pointer;
        outline: 0;
        border: 0;
    }
    @media screen and (max-width: 600px){
        max-width: 200px;
        align-self:center;
    }
`;
export const JoinDiscordButton = styled.button`
     border: 0;
    outline: 0;
    padding: 20px;
    padding-left: 0;
    max-width: 200px;
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
    }
`;
export const InfoButtonsSection = styled.div`
    display: flex;
    justify-content: space-evenly;
    gap: 20px;
    margin-top: 120px;

    width: 80%;
    @media screen and (max-width: 600px){
        flex-direction: column;
        width: 100%;
        align-self: center;
        justify-content: center;
    }
`;