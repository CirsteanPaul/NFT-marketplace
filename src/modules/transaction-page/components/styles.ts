import styled from "styled-components";

export const TransactionContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    gap: 20px;
    width: 70%;
    min-height: 40px;
    align-self: center;
    padding: 10px;
    border: 2px solid #43597A;
    color: #08D9F2;
    border-radius:  10px;
    background: linear-gradient(90deg, rgba(26, 54, 94, 0.6) -3.84%, rgba(26, 54, 94, 0.5) 133.08%);
    align-items:center;
    @media screen and (max-width: 850px){
        width: 100%;
    }
`;
export const TransactionAddress = styled.p`
    font-size: 20px;
    color:#f1f1f9;
    font-weight: 900;
    text-shadow: 3px 3px black;
    @media screen and (max-width: 500px){
        font-size: 13px;
        font-weight: normal;
    }
`;
export const OtherInfo = styled.p`
    display: flex;
    width: 100%;
    justify-content: space-around;
`;
export const TransactionMoreInfo = styled.p`
    font-size: 17px;
    color:white;
`;