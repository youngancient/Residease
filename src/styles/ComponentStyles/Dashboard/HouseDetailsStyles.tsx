import { styled } from "styled-components";

export const BackBtnStyles = styled.button`
  border: 2px solid #000;
  color: var(--gray-900, #0c1116);
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 0.875rem */
  display: flex;
  border-radius: 2rem;
  padding: 0.75rem 1.25rem 0.75rem 0.75rem;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid var(--gray-200, #eaecee);
  background: var(--base-background-white, #fff);
  width: fit-content;
`;

export const LargeTextStyles = styled.h3`
  display: flex;
  color: var(--gray-800, #242d35);
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 3.4125rem */
  letter-spacing: 0.0525rem;
  @media (max-width: 500px){
    font-size: 1.75rem;
  }
  @media (min-width: 500px){
    font-size: 2rem;
  }
  @media (min-width: 998px){
    font-size: 2.625rem;
  }
`;
export const HouseDetailsStyles = styled.div`
  border: 2px solid #000;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  .one {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media (max-width: 500px){
    .one{
      display: block;
      button{
        margin-top: 1rem;
      }
    }
  }
`;
