import styled from "styled-components";

export const LayoutContainer = styled.div`
    display:flex;
    width: 100vw;

    min-height: 100vh;
`;
export const MainContentContainer = styled.main<{scrollable: boolean}>`
    width: 100%;
    position: relative;
    overflow: ${props => props.scrollable ? "scroll" : "hidden"};
    overflow: scroll;
    overflow-x: hidden;
    flex-direction: column;
    @media screen and (max-width: 990px){
        overflow-y: visible;
    }
    background-color: rgba(1, 32, 76, 1);
`;
export const ShadowColorBottomRight = styled.div`
    position: absolute;
    width: 244px;
    height: 574.71px;
    left: 83vw;
    top: 70vh;
    background: #1F62EA;
    border: 1px solid #000000;
    filter: blur(160px);
    overflow: hidden;
    transform: rotate(-38.84deg);
`;
export const ShadowColorBottomLeft = styled.div`
    box-sizing: border-box;
position: absolute;
width: 630px;
height: 716px;
left: 1vw;
top: 60vh;
background: #794CEC;
border: 1px solid #000000;
overflow: hidden;

filter: blur(360px);
`;
export const ShadowColorTopLeft = styled.div`
    box-sizing: border-box;
    position: absolute;
    width: 469.16px;
    height: 819.21px;
    left: -10vw;
    top: -75vh;
    background: #F268EA;
    overflow: hidden;
    border: 1px solid #000000;
    filter: blur(360px);
    transform: rotate(-38.84deg);
`;
export const CircleBackground = styled.div`
    position: absolute;
    width: 267px;
    height: 73px;
    left: 469px;

    top: 572px;
    background: #2CA0E2;
    border-radius: 4px;
    transform: matrix(-1, 0, 0, 1, 0, 0);
`;