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
    font-size: 20px;
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
height: 240px;
left: -14px;
top: 85%;
border-radius: 5px;
padding: 10px;
padding-left: 10px;
padding-bottom: 20px;
box-shadow: 1.5px 1px  0 0 rgba(0,0,0,.4);
border: 1px solid rgba( 255,255,255, .3);
background: linear-gradient(90deg, rgba(255, 255, 255, 0.1) -1.52%, rgba(255, 255, 255, 0.024) 104.35%);
/* backdrop-filter: blur(120px); */
@media screen and (max-width:520px){
        width: 290px;
        height: 250px;
        gap: 10px;
        top: 65%;
        left: -7%
    }
`;
export const LatestItemName = styled.p`
    font-family: Alef;
    font-size:20px;
    color: white;
    font-weight: 700;
    @media screen and (max-width:520px){
        font-size: 20px;
    }
`;
export const LatestItemPrice = styled.p`
    color: white;
    font-size: 13px;
    @media screen and (max-width:520px){
        font-size: 15px;
    }
`;
export const LatestItemTokenPrice = styled.p`
    color: white;
    font-size: 13px;
    @media screen and (max-width:520px){
        font-size: 15px;
    }
`;
export const DeleteButton = styled.button`
    outline: 0;
    border: 0;
    padding: 10px 30px;
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
    opacity: .9;
    font-size: 15px;
    padding: 10px 40px;
    color: white;

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
    gap: 10px;
    
`;
export const SocialContainer = styled.div`
    display:flex;
     margin: -18px 0;
    flex-direction: row;
     gap: 10px;
    align-items:center;
    @media screen and (max-width: 520px){
        margin: -7px 0;
    }
`;
export const SocialLinkButton = styled.button`
    outline: 0;
    border: 0;
    background-color: transparent;
    justify-content: center;
    align-items: center;
    display:flex;
    &:hover{
        cursor: pointer;
        outline: 0;
        border: 0;
    }
`;