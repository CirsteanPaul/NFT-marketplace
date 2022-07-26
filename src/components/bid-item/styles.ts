import styled from "styled-components";

export const LatestItemSectionContainer = styled.div`
    display:flex;
    margin-top: -20px;
    flex-direction: column;
    margin-right: 40px;
    width: 300px;
    height: 100%;
    align-items:center;
    flex: 1;
    gap: 10px;
    @media screen and (max-width:520px){
        max-width: 300px;
        min-width: 300px;
        margin-left: -20px;
    }
`;
export const LatestItemTitle = styled.p`
    color:white;
    opacity: .7;
    font-family: Alef;
    font-size: 40px;
`;
export const LatestItemImage = styled.img`
    object-fit: cover;
    position: relative;
    width: 300px;
    height: 300px;
    z-index: 5;
    border-radius: 15px;
    border-bottom: 4px solid rgba(0,0, 0, .4);
    @media screen and (max-width:520px){
        width: 250px;
        height: 250px;
    }
`;
export const LateItemData = styled.div`
box-sizing: border-box;
position: absolute;
display:flex;

flex-direction: column;
justify-content: flex-end;
gap: 20px;
width: 330px;
height: 300px;
left: -14px;
top: 70%;
border-radius: 5px;
padding: 10px;
padding-left: 10px;
padding-bottom: 20px;
box-shadow: 1.5px 1px  0 0 rgba(0,0,0,.4);
border: 1px solid rgba( 255,255,255, .3);
background: linear-gradient(90deg, rgba(255, 255, 255, 0.1) -1.52%, rgba(255, 255, 255, 0.024) 104.35%);
clip-path: polygon(0 0, 22% 0, 100% 0, 100% 74%, 66% 100%, 0 100%);

-webkit-clip-path: polygon(0 0, 22% 0, 100% 0, 100% 74%, 66% 100%, 0 100%);
/* backdrop-filter: blur(120px); */
@media screen and (max-width:520px){
        width: 230px;
        height: 230px;
        gap: 10px;
        top: 60%;
    }
`;
export const LatestItemName = styled.p`
    font-family: Alef;
    font-size:30px;
    color: white;
    font-weight: 700;
    @media screen and (max-width:520px){
        font-size: 20px;
    }
`;
export const LatestItemPrice = styled.p`
    color: white;
    font-size: 20px;
    @media screen and (max-width:520px){
        font-size: 15px;
    }
`;
export const LatestItemTokenPrice = styled.p`
    color: white;
    font-size: 30px;
    @media screen and (max-width:520px){
        font-size: 15px;
    }
`;
export const DeleteButton = styled.button`
    outline: 0;
    border: 0;
    padding: 10px 20px;
    background-color: #984D4D;
    color: white;

    opacity: .9;
    font-size: 15px;
    clip-path: polygon(0 19%, 22% 0, 100% 0, 100% 80%, 75% 100%, 0 100%);
    -webkit-clip-path: polygon(0 19%, 22% 0, 100% 0, 100% 80%, 75% 100%, 0 100%);
    border-radius: 5px;
    &:hover{
        cursor: pointer;
        border: 0;
        outline: 0;
    }
    @media screen and (max-width: 520px){
        padding: 7px 15px;
        font-size: 13px;
    }
`;
export const BuyButton = styled.button`
    outline: 0;
    border: 0;
    background-color: #2CA0E2;
    color: white;
    opacity: .9;
    font-size: 15px;
    padding: 10px 40px;
    clip-path: polygon(0 19%, 22% 0, 100% 0, 100% 80%, 75% 100%, 0 100%);
    -webkit-clip-path: polygon(0 19%, 22% 0, 100% 0, 100% 80%, 75% 100%, 0 100%);
    border-radius: 5px;
    &:hover{
        cursor: pointer;
        border: 0;
        outline: 0;
    }
    @media screen and (max-width: 520px){
        padding: 7px 25px;
        font-size: 13px;
    }
`;
export const ButtonsSection = styled.div`
    display: flex;
    justify-content: center;
    padding-right: 20%;
    gap: 10px;
    
`;