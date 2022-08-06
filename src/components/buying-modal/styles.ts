import Modal from "react-modal";
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
`;
export const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
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
`;
export const ContentContainer = styled.div`
    width: 100%;
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
    @media screen and (max-width: 90px){
        width: 70%;
    }
`;