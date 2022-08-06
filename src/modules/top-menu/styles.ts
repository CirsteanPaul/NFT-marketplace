import styled from "styled-components";

export const TopMenuContainer = styled.div`
    display:flex;
    justify-content: space-between;
    padding: 40px 70px; 
    width: calc(100vw - 120px);
    overflow: hidden;
`;
export const LeftSide = styled.div`
    display:flex;
    gap: 30px;
`;
export const RedirectButton = styled.button`
    display:flex;
    z-index: 100;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: transparent;
    outline: 0;
    border:0;
    padding: 10px;
    font-size: 20px;
    &:hover{
        cursor: pointer;
        outline: 0;
        border:0 ;
    }
`;
export const RightSide = styled.div`
    display:flex;
    gap: 30px;
`;
export const BalanceContainer = styled.div`

  padding: 10px 20px;
  -webkit-clip-path: polygon(0 0, 85% 0, 100% 20%, 100% 100%, 15% 100%, 0 85%);
  clip-path: polygon(0 0, 85% 0, 100% 20%, 100% 100%, 15% 100%, 0 85%);
  border-radius: 9px;
  color: rgba(8, 217, 242, 1);
  background: linear-gradient(90deg, rgba(26, 54, 94, 0.6) -3.84%, rgba(26, 54, 94, 0.5) 133.08%);
  text-align:center;
  display:flex;
  align-items: center;
  justify-content:center;
  font-size: 22px;
`;

export const ConnectButton = styled.button`
    outline: 0;
    border: 0;
    background-color: purple;
    padding: 10px 20px;
    display:flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    -webkit-clip-path: polygon(0 10%, 10% 0, 100% 0, 100% 88%, 82% 100%, 0 100%);
    clip-path: polygon(0 14%, 22% 0, 100% 0, 100% 84%, 80% 100%, 0 100%);

    color: white;
    font-family: Inter;
    font-size: 22px;
    &:hover{
        cursor: pointer;
        border: 0;
        outline: 0;
    }
`;