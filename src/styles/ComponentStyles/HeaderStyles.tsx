import { css, styled } from "styled-components";

interface IPageLink {
  $isActive?: boolean;
}
export const PageLinkStyles = styled.p<IPageLink>`
  color: #111;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 1.4rem */
  letter-spacing: -0.02rem;
  ${(props) =>
    props.$isActive &&
    css`
      font-weight: 800;
    `}
`;

export const MenuStyle = styled.div`
    svg{
      transition: 1s;
    }
  @media (min-width: 767px) {
    display: none;
  }
`;
export const HeaderStyles = styled.header`
  border-bottom: 1px solid rgba(196, 196, 196, 0.6);
  padding: 1rem 1rem 1rem 1rem;
  font-size: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .desktop-links {
    display: flex;
    gap: 3rem;
  }
  .button button {
    display: flex;
    width: 14.375rem;
    height: 4rem;
    padding: 0.625rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    flex-shrink: 0;
    border-radius: 0.9375rem;
    background: var(--primary-color, #000);
    color: var(--white, #fff);
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 100%; /* 1rem */
    letter-spacing: 0.02rem;
  }
  @media (max-width: 767px) {
    .desktop-links,
    .button {
      display: none;
    }
  }
  @media (max-width: 998px) {
    .button button {
      width: 10rem;
    }
  }
  @media (min-width: 998px) {
    padding: 1rem 5rem 1rem 5rem;
    .button button {
      width: 14.375rem;
    }
  }
`;
export const DashboardNavStyles = styled(HeaderStyles)`
  .desktop-links {
    gap: 4rem;
  }
  .avatar {
    width: 3.75rem;
    height: 3.75rem;
    background: #d9d9d9;
    border-radius: 50%;
  }
  .dashboard-btns {
    display: flex;
    align-items: center;
    gap: 1.88rem;
  }
  .one {
    display: flex;
    gap: 0.75rem;
  }
  .one button {
    display: flex;
    padding: 0.75rem;
    align-items: center;
    gap: 0.5rem;
    border-radius: 2rem;
    border: 1px solid var(--gray-200, #eaecee);
    background: var(--base-background-white, #fff);
  }
  @media (max-width: 767px) {
    .dashboard-btns {
      display: none;
    }
  }
`;
