import { styled } from "styled-components";
import { SubsectionStyles } from "../HouseDetailsStyles";
import { LargeBtnStyles } from "../../HeaderStyles";

export const SatisfiedStyles = styled(SubsectionStyles)`
  .three {
    display: flex;
    gap: 1.5rem;
    align-items: center;
  }
  .yes {
    display: flex;
    height: 5.375rem;
    padding: 0rem 0.6875rem 0rem 1.625rem;
    justify-content: flex-end;
    align-items: center;
    border-radius: 0.75rem;
    border: 1px solid var(--gray-200, #eaecee);
    background: var(--base-background-white, #fff);
  }
  @media (max-width: 500px) {
    .yes {
      display: none;
    }
  }
  @media (max-width: 375px) {
    .three {
      flex-direction: column;
      justify-content: flex-end;
    }
    h4 {
      text-align: center;
    }
  }
`;

export const TransparentBtnStyles = styled(LargeBtnStyles)`
  border: 1px solid var(--primary-color, #000);
  background: transparent;
  color: var(--primary-color, #000);
`;

export const PadBottomStyles = styled.div`
  padding-bottom: 4.5rem;
  @media (max-width: 500px) {
    padding-bottom: 4rem;
  }
  @media (max-width: 500px) {
    padding-bottom: 5rem;
  }
`;

export const WatchVideoStyles = styled.div`
  border-radius: 1.25rem;
  background: #ecedf7;
  height: 250px;
  width: 100%;
  display :flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
`;
