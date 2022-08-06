import styled from "styled-components";

export const LatestItemSectionContainer = styled.div`
    display:flex;
    margin-top: -60px;
    flex-direction: column;

    margin-right: 40px;
    min-width: 500px;
    height: 100%;
    align-items:center;
    flex: 1;
    gap: 10px;
    @media screen and (max-width:800px){
        max-width: 300px;
        min-width: 300px;
        margin-left: -20px;
        display: none;
    }
    &:hover{
        cursor: pointer;
    }
`;
export const LatestItemTitle = styled.p`
    color:white;
    opacity: .7;
    font-family: Alef;
    font-size: 40px;
    @media screen and (max-width:1400px){
        font-size: 30px;
    }
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
height: 260px;
left: 15px;
top: 70%;
border-radius: 5px;
padding: 10px;
padding-left: 10px;
padding-bottom: 20px;
box-shadow: 1.5px 1px  0 0 rgba(0,0,0,.4);
border: 1px solid rgba( 255,255,255, .3);
background: linear-gradient(90deg, rgba(255, 255, 255, 0.1) -1.52%, rgba(255, 255, 255, 0.024) 104.35%);
clip-path: polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%, 0% 50%);
-webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%, 0% 50%);
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