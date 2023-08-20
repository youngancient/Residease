import { styled } from "styled-components";


export const MobileNavStyles = styled.div`
    border: 2px solid red;
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background: transparent;
    @media (min-width: 767px){
        display : none;
    }
`