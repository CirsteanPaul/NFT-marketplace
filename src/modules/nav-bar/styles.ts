import styled from "styled-components";

export const NavBarContainer = styled.div`
    mix-blend-mode: normal;
    min-height: 100vh;
    width: 120px;
    max-width: 200px;
    display:flex;
    flex-direction: column;
    padding: 20px 10px;
    justify-content:space-between;
    align-items:center;
    border-color: transparent;
    background: linear-gradient(180deg, #F267EB 0%, rgba(127, 76, 239, 0) 100%);
    background-color: rgba(1, 32, 76, 1);
`;
export const MenuContainer = styled.div`
    display:flex;
    flex-direction:column;
    gap: 20px;
    justify-content:center;
    align-items:center;
`
export const HomeIconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`;
export const LogoContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`;
export const MenuItemsContainer = styled.div`
    display:flex;
    gap: 30px;
    flex-direction: column;
`;
export const MenuItem = styled.button`
    font-size: 16px;
    outline: 0;
    border: 0;
    font-family: Inter;
    background: transparent;
    color: white;
    text-align: center;
    &:hover{
        cursor: pointer;
        outline: 0;
        border: 0;
    }
`;