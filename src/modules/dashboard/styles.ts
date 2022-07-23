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
    width: 300px;
    height: 50px;
    font-size: 15px;
    outline: 0;
    border: 0;
    border-radius: 5px;
    padding: 0 10px;
    clip-path: polygon(0 19%, 22% 1%, 100% 0, 100% 79%, 75% 100%, 0 100%);
    -webkit-clip-path: polygon(0 19%, 22% 1%, 100% 0, 100% 79%, 75% 100%, 0 100%);
    color:darkblue;
    background-color: cyan;

`;
export const InputLineWrapper = styled.div`
    width: 300px;
    display:flex;
    justify-content: flex-start;
    align-items:center;
    height: 50px;
    font-size: 15px;
    outline: 0;
    border: 0;
    border-radius: 5px;
    padding: 0 10px;
    clip-path: polygon(0 19%, 22% 1%, 100% 0, 100% 79%, 75% 100%, 0 100%);
    -webkit-clip-path: polygon(0 19%, 22% 1%, 100% 0, 100% 79%, 75% 100%, 0 100%);
    color:darkblue;
    background-color: cyan;

`;
export const SelectForm = styled.select`
    margin-left: 10px;
    outline: 0;
    padding: 10px;
    background-color: black;
    border-radius: 10px;
    border: 0;
    color: white;
`;
export const PhotoInput = styled.input`
    margin-left: 10px;
    outline: 0;
    padding: 5px;
    background-color: black;
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
    background-color:cyan;
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