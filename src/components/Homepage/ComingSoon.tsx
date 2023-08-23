import { InnerSection } from "@/styles/PageStyles/SectionStyles";
import { styled } from "styled-components";

// I am comig here
export const ComingSoon = () => {
  return (
    <ComingSoonStyles>
      <h1>COMING SOON</h1>
      <p>Our website is under construction, follow us for more update</p>
    </ComingSoonStyles>
  );
};

export const ComingSoonStyles = styled.div`
  margin-top: 1.31rem;
  height: 100vh;
  border-radius: 2.25rem;
  padding: 2rem;
  background: #19324c;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  h1 {
    color: #fff;
    font-family: Montserrat;
    font-size: 4rem;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 5.6rem */
    letter-spacing: 0.96rem;
    text-align: center;
  }
  p {
    color: #fff;
    font-family: Montserrat;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 2.1rem */
    text-align: center;
  }
  @media (max-width: 375px) {
    h1{
        font-size: 2.5rem;
    }
  }
  @media (min-width: 375px) {
    h1{
        font-size: 2.75rem;
    }
  }
  @media (min-width: 767px) {
    h1{
        font-size: 3rem;
    }
  }
  @media (min-width: 998px) {
    h1{
        font-size: 4rem;
    }
  }
`;


export const ComingSoonShort = styled.div`
  padding: 0.3125rem 0.625rem 0.4375rem 0.625rem;
  width: fit-content;
  border-radius: 0.75rem;
  background: #27b43e;
  color: var(--green-50, #f6fff0);
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 0.75rem */
`;
