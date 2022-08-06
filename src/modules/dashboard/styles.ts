import styled from "styled-components";

export const AddNewCollectionContainer = styled.form`
    display:flex;
    width: 100vw;
    flex-direction: column;
    justify-content: center;
    margin-top: 100px;
    z-index: 10;
    gap: 30px;
`;
export const MainPartContainer = styled.div`
    display:flex;
    width: 100vw;
    justify-content: center;
    gap: 70px;
    @media screen and (max-width: 700px){
        flex-direction: column;;
        align-items: center;
    }
`;
export const InputForm = styled.div`
    display:flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
    z-index: 100;
`;
export const LogImage = styled.img`
    height: 300px;
    width: 300px;
    box-shadow: 1px 1px rgba(0,0,0, .7);
    border-radius: 5px;
    object-fit: cover;
`;
export const InputLine = styled.input`
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
export const InputLineWrapper = styled.div`
    width: 100%;
    font-size: 15px;
   
    display:flex;
    justify-content: flex-start;
    flex-direction: column;
    gap: 20px;
    align-items:center;
    font-size: 15px;
    outline: 0;
    border: 0;
    border-radius: 5px;
    padding: 0 10px;
   @media screen and (max-width: 700px){
        width: 80%;
    }

`;
export const SelectionLine = styled.div`
     display: flex;
    justify-content: space-around;
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
export const SelectForm = styled.select`
    margin-left: 10px;
  
    outline: 0;
    border: 0;
    padding: 10px;
    border-radius: 10px;
    background: transparent;
    color: #08D9F2;
`;
export const PhotoInput = styled.input`
    margin-left: 100px;
    outline: 0;
    align-self: center;
    z-index: 100;
    display: flex;
    justify-content: center;
    background-color: transparent;
    border-radius: 10px;
    border: 0;
    color: white;
`;
export const ListingButtonContainter = styled.div`
    display:flex;
    margin-top: 50px;
    z-index: 50;
    justify-content: center;
`;
export const ListingButton = styled.input`
    height: 70px;
    width: 250px;
    border-radius: 10px;
    z-index: 50;
    background-color:#2CA0E2;
    color: white;
    clip-path: polygon(0 19%, 22% 1%, 100% 0, 100% 79%, 75% 100%, 0 100%);
    -webkit-clip-path: polygon(0 19%, 22% 1%, 100% 0, 100% 79%, 75% 100%, 0 100%);
    outline: 0;
    border: 0;
    text-transform: uppercase;
    font-size: 17px;
    &:hover{
        cursor: pointer;
    }
    @media screen and (max-width:700px){
        width:180px;
        height: 50px
    }
`;