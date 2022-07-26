import styled from "styled-components";

export const AddNewCollectionContainer = styled.form`
    display:flex;
    width: 100vw;
    flex-direction: column;
    justify-content: center;
    margin-top: 100px;
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
`;
export const LogImage = styled.img`
    height: 300px;
    width: 300px;
    box-shadow: 1px 1px rgba(0,0,0, .7);
    border-radius: 5px;
    object-fit: cover;
`;
export const InputLine = styled.input`
    font-size: 15px;
    width: 453px;
    height: 47px;
    opacity: .8;
    border: 2px solid #43597A;
    background-color: #1A365E;
    background: linear-gradient(90deg, rgba(26, 54, 94, 0.6) -3.84%, rgba(26, 54, 94, 0.5) 133.08%);
    backdrop-filter: blur(60px);
    outline: 0;
    border-radius: 5px;
    color: #08D9F2;
    padding: 0 10px;
    clip-path: polygon(0 19%, 22% 1%, 100% 0, 100% 79%, 75% 100%, 0 100%);
    -webkit-clip-path: polygon(0 19%, 22% 1%, 100% 0, 100% 79%, 75% 100%, 0 100%);
    ::placeholder{
        color: #08D9F2;
    }
    @media screen and (max-width: 700px){
        width: 80%;
    }

`;
export const InputLineWrapper = styled.div`
    width: 473px;
    font-size: 15px;
   
    display:flex;
    justify-content: flex-start;
    align-items:center;
    font-size: 15px;
    outline: 0;
    border: 0;
    border-radius: 5px;
    padding: 0 10px;
    clip-path: polygon(0 19%, 22% 1%, 100% 0, 100% 79%, 75% 100%, 0 100%);
    -webkit-clip-path: polygon(0 19%, 22% 1%, 100% 0, 100% 79%, 75% 100%, 0 100%);
    color:darkblue;
    @media screen and (max-width: 700px){
        width: 80%;
    }

`;
export const SelectionLine = styled.div`
    border-radius: 10px;
    padding: 4px 10px;
    display: flex;
    align-items: center;
    width: 100%;
    display: block;
    border: 2px solid #43597A;
    background: linear-gradient(90deg, rgba(26, 54, 94, 0.6) -3.84%, rgba(26, 54, 94, 0.5) 133.08%);
    color: #08D9F2;
    clip-path: polygon(0 19%, 22% 1%, 100% 0, 100% 79%, 75% 100%, 0 100%);
    -webkit-clip-path: polygon(0 19%, 22% 1%, 100% 0, 100% 79%, 75% 100%, 0 100%);
    
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
    margin-left: 10px;
    outline: 0;
    padding: 5px;
    background-color: transparent;
    border-radius: 10px;
    border: 0;
    color: white;
`;
export const ListingButtonContainter = styled.div`
    display:flex;
    margin-top: 50px;
    justify-content: center;
`;
export const ListingButton = styled.input`
    height: 70px;
    width: 250px;
    border-radius: 10px;
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
`;