import { styled } from "styled-components";

export const AllListingStyles = styled.div`
  border: 2px solid #000;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  h2 {
    color: var(--gray-700, #373f47);
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 800;
    line-height: 140%; /* 2.45rem */
    letter-spacing: 0.035rem;
  }
  .filters {
    display: flex;
    gap: 0.75rem;
  }
  .filter-btns {
    display: flex;
    gap: 0.75rem;
  }
  .one-y {
    display: flex;
    flex-direction: column;
    gap: 1.35rem;
  }
  @media (max-width: 500px) {
    .filters {
      flex-direction: column;
    }
    .filter-btns {
      gap: 0;
      justify-content: space-between;
    }
  }
`;

export const FilterStyle = styled.div`
  border: 2px solid #000;
  display: flex;
  display: flex;
  padding: 0.75rem 0.75rem 0.75rem 1.25rem;
  align-items: center;
  gap: 0.5rem;
  .dropdown {
    position: absolute;
  }
`;

export const SearchInputStyle = styled.div`
  border: 2px solid #000;
`;
