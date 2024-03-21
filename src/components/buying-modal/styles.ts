import styled from "styled-components";

export const modalStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        border: 0,
        minHeight: "50vh",
        minWidth: " 60vw",
        background: "linear-gradient(90deg, rgba(120,55,120,1) 0%, rgba(132,82,172,1) 50%, rgba(79,19,215,0.80015756302521) 100%)",
        transform: 'translate(-50%, -50%)',
        zIndex: 100000,
        padding: '20px',
        display: 'flex',
        gap: '10px',
      },
      overlay: {
        backgroundColor: "rgba(0,0,0, .9)",
        zIndex: 100000,
      }
};
export const Wrapper = styled.div`
    @media screen and (max-width: 900px){
        flex-direction: column;
        gap: 30px;
    }
    @media screen and (max-width: 600px){
        gap: 10px;
    }
`;
export const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    align-items: center;
    height: 100%;
`;
export const InfoContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 100px;
    gap: 20px;
    @media screen and (max-width: 600px){
        gap: 10px;
        margin: 0;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
`;
export const CloseButton = styled.button`
    border: 0;
    outline: 0;
    align-self: flex-start;
    color: white;
    margin-bottom: 20px;
    padding: 10px 30px;
    border-radius: 50px;
    font-size: 24px;
    padding-left: 10px;
    letter-spacing: 1.3px;
    background-color: transparent;
    &:hover{
        cursor: pointer;
        outline: 0;
        border: 0;
    }
    @media screen and (max-width: 600px){
        font-size: 16px;
        padding: 10px 15px;
    }
`;
export const ContentContainer = styled.div`
    width: 100%;
    display:flex;
    height: 100%;
    flex-direction: column;
    gap: 30px;
    align-self: center;
    justify-content: center;
    align-items: center;
`;
export const DataContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    gap: 20px;
    width: 90%;
    min-height: 40px;
    align-self: center;
    padding: 10px;
    border: 2px solid #43597A;
    color: #08D9F2;
    border-radius:  10px;
    background: linear-gradient(90deg, rgba(26, 54, 94, 0.6) -3.84%, rgba(26, 54, 94, 0.5) 133.08%);
    align-items:center;
    @media screen and (max-width: 900px){
        width: 70%;
    }
    @media screen and (max-width: 600px){
        gap: 10px;
        min-height: 30px;
        width: 40%;
        font-size: 11px;
    }
`;
export const BuyingContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 90%;
    min-height: 200px;
    padding: 40px;
    border: 2px solid #43597A;
    color: #08D9F2;
    border-radius:  10px;
    background: linear-gradient(90deg, rgba(26, 54, 94, 0.6) -3.84%, rgba(26, 54, 94, 0.5) 133.08%);
    align-items:center;
    @media screen and (max-width: 900px){
        width: 70%;
    }
    @media screen and (max-width: 900px){
        min-height: 100px;
        padding: 20px;
    }

`;
export const BuyingTitle = styled.h3`
    color:white;
    font-size: 25px;
    letter-spacing: 1.7px;
    @media screen and (max-width: 600px){
        font-size: 14px;
        letter-spacing: 1.3px;
    }
`;
export const BuyItemContainer = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    gap: 10px;
    margin-bottom: 10px;
    @media screen and (max-width: 600px){
        font-size: 11px;
    }
`;
export const StyledButton = styled.button`
    border: 0;
    outline: 0;
    align-self: center;
    color: white;
    padding: 10px 30px;
    border-radius: 50px;
    font-size: 33px;
    letter-spacing: 1.3px;
    background-color: transparent;
    &:hover{
        cursor: pointer;
        outline: 0;
        border: 0;
    }
    @media screen and (max-width: 600px){
        font-size: 20px;
        padding: 10px 15px;
    }
 
`;
export const SelectionContainer = styled.div`
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    gap: 10px;
    @media screen and (max-width: 600px){
        padding: 0;
    }
`;
export const InputAmount = styled.input`
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
    z-index: 100;
    background: linear-gradient(90deg, rgba(26, 54, 94, 0.6) -3.84%, rgba(26, 54, 94, 0.5) 133.08%);
    align-items:center;
    @media screen and (max-width: 850px){
        width: 100%;
    }
    ::placeholder{
        color: #08D9F2;
    }
    @media screen and (max-width: 700px){
        width: 80%;
    }
    
    :focus{
        outline: 0;
    }

`;
export const BuyButton = styled.button`
    outline: 0;
    border: 0;
    background-color: #2CA0E2;
    opacity: .9;
    font-size: 18px;
    padding: 20px 40px;
    color: white;

    clip-path: polygon(0 19%, 22% 0, 100% 0, 100% 80%, 75% 100%, 0 100%);
    -webkit-clip-path: polygon(0 19%, 22% 0, 100% 0, 100% 80%, 75% 100%, 0 100%);
    border-radius: 5px;
    &:hover{
        cursor: pointer;
        border: 0;
        outline: 0;
    }
    @media screen and (max-width: 600px){
        font-size: 12px;
        padding: 10px 15px;
    }
`;
export const ButtonsSection = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    
`;