import { styled } from "styled-components";

export const HeroSection = styled.section`
  padding: 1.5rem;
  margin-top: 1rem;
  @media (max-width: 500px) {
    padding: 1rem;
  }
`;

export const InnerSection = styled.section`
  padding: 2rem;
  margin-top: 3rem;
  @media (max-width: 500px) {
    padding: 1.5rem;
    margin-top: 2rem;
  }
  @media (min-width: 998px) {
    padding: 1rem 6rem 1rem 6rem;
  }
`;
