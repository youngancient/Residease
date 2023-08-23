import { Rotate } from "@/animations/keyframes";
import { FunctionComponent } from "react";
import { styled } from "styled-components";

export const GreaterThan = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M6.66656 4L5.72656 4.94L8.7799 8L5.72656 11.06L6.66656 12L10.6666 8L6.66656 4Z"
        fill="#0C1116"
      />
    </svg>
  );
};

export const FilterIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M6.66667 12H9.33333V10.6667H6.66667V12ZM2 4V5.33333H14V4H2ZM4 8.66667H12V7.33333H4V8.66667Z"
        fill="#A8B0B9"
      />
    </svg>
  );
};

export const SortIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M2 12H6V10.6667H2V12ZM2 4V5.33333H14V4H2ZM2 8.66667H10V7.33333H2V8.66667Z"
        fill="#A8B0B9"
      />
    </svg>
  );
};

interface ICancel {
  handleCancel: () => void;
}
export const CircleX: FunctionComponent<ICancel> = ({ handleCancel }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      onClick={handleCancel}
    >
      <path
        d="M10.0303 8.96965C9.73741 8.67676 9.26253 8.67676 8.96964 8.96965C8.67675 9.26255 8.67675 9.73742 8.96964 10.0303L10.9393 12L8.96966 13.9697C8.67677 14.2625 8.67677 14.7374 8.96966 15.0303C9.26255 15.3232 9.73743 15.3232 10.0303 15.0303L12 13.0607L13.9696 15.0303C14.2625 15.3232 14.7374 15.3232 15.0303 15.0303C15.3232 14.7374 15.3232 14.2625 15.0303 13.9696L13.0606 12L15.0303 10.0303C15.3232 9.73744 15.3232 9.26257 15.0303 8.96968C14.7374 8.67678 14.2625 8.67678 13.9696 8.96968L12 10.9393L10.0303 8.96965Z"
        fill="#C4C4C4"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z"
        fill="#C4C4C4"
      />
    </svg>
  );
};

export const BackIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M13.3337 7.33341H5.22033L8.94699 3.60675L8.00033 2.66675L2.66699 8.00008L8.00033 13.3334L8.94033 12.3934L5.22033 8.66675H13.3337V7.33341Z"
        fill="#A8B0B9"
      />
    </svg>
  );
};

export const Dollar = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M11.8003 10.9C9.53031 10.31 8.80031 9.7 8.80031 8.75C8.80031 7.66 9.81031 6.9 11.5003 6.9C13.2803 6.9 13.9403 7.75 14.0003 9H16.2103C16.1403 7.28 15.0903 5.7 13.0003 5.19V3H10.0003V5.16C8.06031 5.58 6.50031 6.84 6.50031 8.77C6.50031 11.08 8.41031 12.23 11.2003 12.9C13.7003 13.5 14.2003 14.38 14.2003 15.31C14.2003 16 13.7103 17.1 11.5003 17.1C9.44031 17.1 8.63031 16.18 8.52031 15H6.32031C6.44031 17.19 8.08031 18.42 10.0003 18.83V21H13.0003V18.85C14.9503 18.48 16.5003 17.35 16.5003 15.3C16.5003 12.46 14.0703 11.49 11.8003 10.9Z"
        fill="#A8B0B9"
      />
    </svg>
  );
};

export const Contact = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M15 12H17C17 9.24 14.76 7 12 7V9C13.66 9 15 10.34 15 12ZM19 12H21C21 7.03 16.97 3 12 3V5C15.87 5 19 8.13 19 12ZM20 15.5C18.75 15.5 17.55 15.3 16.43 14.93C16.33 14.9 16.22 14.88 16.12 14.88C15.86 14.88 15.61 14.98 15.41 15.17L13.21 17.37C10.38 15.93 8.06 13.62 6.62 10.78L8.82 8.57C9.1 8.31 9.18 7.92 9.07 7.57C8.7 6.45 8.5 5.25 8.5 4C8.5 3.45 8.05 3 7.5 3H4C3.45 3 3 3.45 3 4C3 13.39 10.61 21 20 21C20.55 21 21 20.55 21 20V16.5C21 15.95 20.55 15.5 20 15.5ZM5.03 5H6.53C6.6 5.88 6.75 6.75 6.98 7.58L5.78 8.79C5.38 7.58 5.12 6.32 5.03 5ZM19 18.97C17.68 18.88 16.4 18.62 15.2 18.21L16.4 17.01C17.25 17.25 18.12 17.4 19 17.46V18.97Z"
        fill="#A8B0B9"
      />
    </svg>
  );
};
export const Agent = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 5.9C13.16 5.9 14.1 6.84 14.1 8C14.1 9.16 13.16 10.1 12 10.1C10.84 10.1 9.9 9.16 9.9 8C9.9 6.84 10.84 5.9 12 5.9ZM12 14.9C14.97 14.9 18.1 16.36 18.1 17V18.1H5.9V17C5.9 16.36 9.03 14.9 12 14.9ZM12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4ZM12 13C9.33 13 4 14.34 4 17V19C4 19.55 4.45 20 5 20H19C19.55 20 20 19.55 20 19V17C20 14.34 14.67 13 12 13Z"
        fill="#A8B0B9"
      />
    </svg>
  );
};
export const Amenities = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 7V3H2V21H22V7H12ZM6 19H4V17H6V19ZM6 15H4V13H6V15ZM6 11H4V9H6V11ZM6 7H4V5H6V7ZM10 19H8V17H10V19ZM10 15H8V13H10V15ZM10 11H8V9H10V11ZM10 7H8V5H10V7ZM20 19H12V17H14V15H12V13H14V11H12V9H20V19ZM18 11H16V13H18V11ZM18 15H16V17H18V15Z"
        fill="#A8B0B9"
      />
    </svg>
  );
};
export const Type = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M18 8H8C6.9 8 6 8.9 6 10V16C6 16.5304 6.21071 17.0391 6.58579 17.4142C6.96086 17.7893 7.46957 18 8 18H18C19.11 18 20 17.11 20 16V10C20 9.46957 19.7893 8.96086 19.4142 8.58579C19.0391 8.21071 18.5304 8 18 8ZM14 16H8V14H14V16ZM18 12H8V10H18V12ZM22 6H4V22H2V2H4V4H22V6Z"
        fill="#A8B0B9"
      />
    </svg>
  );
};

interface ICheckBox {
  isSelected: boolean;
  handleClick: () => void;
}
const CheckBoxStyle = styled.div`
  cursor: pointer;
`;
export const CheckBox: FunctionComponent<ICheckBox> = ({
  isSelected,
  handleClick,
}) => {
  // change the selected state
  return (
    <CheckBoxStyle onClick={handleClick}>
      {isSelected ? (
        <Done />
      ) : (
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="0.5"
            width="25"
            height="25"
            rx="2.5"
            stroke="#A0B1C3"
          />
        </svg>
      )}
    </CheckBoxStyle>
  );
};

export const Done = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <g clipPath="url(#clip0_256_1251)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 12C0 8.8174 1.26428 5.76516 3.51472 3.51472C5.76516 1.26428 8.8174 0 12 0C15.1826 0 18.2348 1.26428 20.4853 3.51472C22.7357 5.76516 24 8.8174 24 12C24 15.1826 22.7357 18.2348 20.4853 20.4853C18.2348 22.7357 15.1826 24 12 24C8.8174 24 5.76516 22.7357 3.51472 20.4853C1.26428 18.2348 0 15.1826 0 12ZM11.3152 17.136L18.224 8.4992L16.976 7.5008L11.0848 14.8624L6.912 11.3856L5.888 12.6144L11.3152 17.1376V17.136Z"
          fill="#004286"
        />
      </g>
      <defs>
        <clipPath id="clip0_256_1251">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const ButtonLoader = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 4px solid #fff;
  border-top: 4px solid transparent;
  margin: auto;
  animation: ${Rotate} 0.6s ease infinite;
`;

export const Wallet = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M19.5 6.75H4.5C3.25736 6.75 2.25 7.75736 2.25 9V18C2.25 19.2426 3.25736 20.25 4.5 20.25H19.5C20.7426 20.25 21.75 19.2426 21.75 18V9C21.75 7.75736 20.7426 6.75 19.5 6.75Z"
        stroke="black"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M19.2825 6.74998V5.34373C19.2824 4.99883 19.2062 4.6582 19.0592 4.34615C18.9123 4.0341 18.6984 3.75832 18.4326 3.53849C18.1668 3.31866 17.8558 3.16019 17.5217 3.0744C17.1877 2.98861 16.8388 2.9776 16.5 3.04217L4.155 5.1492C3.6189 5.25136 3.13526 5.53741 2.78749 5.958C2.43972 6.37859 2.24963 6.90736 2.25 7.4531V9.74998"
        stroke="black"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M17.25 15C16.9533 15 16.6633 14.912 16.4166 14.7472C16.17 14.5824 15.9777 14.3481 15.8642 14.074C15.7506 13.7999 15.7209 13.4983 15.7788 13.2074C15.8367 12.9164 15.9796 12.6491 16.1893 12.4393C16.3991 12.2296 16.6664 12.0867 16.9574 12.0288C17.2483 11.9709 17.5499 12.0006 17.824 12.1142C18.0981 12.2277 18.3324 12.42 18.4972 12.6666C18.662 12.9133 18.75 13.2033 18.75 13.5C18.75 13.8978 18.592 14.2794 18.3107 14.5607C18.0294 14.842 17.6478 15 17.25 15Z"
        fill="black"
      />
    </svg>
  );
};

export const CreditCard = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <mask id="path-1-inside-1_250_1149" fill="white">
        <path d="M21 4.6875H3C2.6519 4.6875 2.31806 4.82578 2.07192 5.07192C1.82578 5.31806 1.6875 5.6519 1.6875 6V18C1.6875 18.3481 1.82578 18.6819 2.07192 18.9281C2.31806 19.1742 2.6519 19.3125 3 19.3125H21C21.3481 19.3125 21.6819 19.1742 21.9281 18.9281C22.1742 18.6819 22.3125 18.3481 22.3125 18V6C22.3125 5.6519 22.1742 5.31806 21.9281 5.07192C21.6819 4.82578 21.3481 4.6875 21 4.6875ZM3 5.8125H21C21.0497 5.8125 21.0974 5.83225 21.1326 5.86742C21.1677 5.90258 21.1875 5.95027 21.1875 6V8.4375H2.8125V6C2.8125 5.95027 2.83225 5.90258 2.86742 5.86742C2.90258 5.83225 2.95027 5.8125 3 5.8125ZM21 18.1875H3C2.95027 18.1875 2.90258 18.1677 2.86742 18.1326C2.83225 18.0974 2.8125 18.0497 2.8125 18V9.5625H21.1875V18C21.1875 18.0497 21.1677 18.0974 21.1326 18.1326C21.0974 18.1677 21.0497 18.1875 21 18.1875ZM19.3125 15.75C19.3125 15.8992 19.2532 16.0423 19.1477 16.1477C19.0423 16.2532 18.8992 16.3125 18.75 16.3125H15.75C15.6008 16.3125 15.4577 16.2532 15.3523 16.1477C15.2468 16.0423 15.1875 15.8992 15.1875 15.75C15.1875 15.6008 15.2468 15.4577 15.3523 15.3523C15.4577 15.2468 15.6008 15.1875 15.75 15.1875H18.75C18.8992 15.1875 19.0423 15.2468 19.1477 15.3523C19.2532 15.4577 19.3125 15.6008 19.3125 15.75ZM13.3125 15.75C13.3125 15.8992 13.2532 16.0423 13.1477 16.1477C13.0423 16.2532 12.8992 16.3125 12.75 16.3125H11.25C11.1008 16.3125 10.9577 16.2532 10.8523 16.1477C10.7468 16.0423 10.6875 15.8992 10.6875 15.75C10.6875 15.6008 10.7468 15.4577 10.8523 15.3523C10.9577 15.2468 11.1008 15.1875 11.25 15.1875H12.75C12.8992 15.1875 13.0423 15.2468 13.1477 15.3523C13.2532 15.4577 13.3125 15.6008 13.3125 15.75Z" />
      </mask>
      <path
        d="M21 4.6875H3C2.6519 4.6875 2.31806 4.82578 2.07192 5.07192C1.82578 5.31806 1.6875 5.6519 1.6875 6V18C1.6875 18.3481 1.82578 18.6819 2.07192 18.9281C2.31806 19.1742 2.6519 19.3125 3 19.3125H21C21.3481 19.3125 21.6819 19.1742 21.9281 18.9281C22.1742 18.6819 22.3125 18.3481 22.3125 18V6C22.3125 5.6519 22.1742 5.31806 21.9281 5.07192C21.6819 4.82578 21.3481 4.6875 21 4.6875ZM3 5.8125H21C21.0497 5.8125 21.0974 5.83225 21.1326 5.86742C21.1677 5.90258 21.1875 5.95027 21.1875 6V8.4375H2.8125V6C2.8125 5.95027 2.83225 5.90258 2.86742 5.86742C2.90258 5.83225 2.95027 5.8125 3 5.8125ZM21 18.1875H3C2.95027 18.1875 2.90258 18.1677 2.86742 18.1326C2.83225 18.0974 2.8125 18.0497 2.8125 18V9.5625H21.1875V18C21.1875 18.0497 21.1677 18.0974 21.1326 18.1326C21.0974 18.1677 21.0497 18.1875 21 18.1875ZM19.3125 15.75C19.3125 15.8992 19.2532 16.0423 19.1477 16.1477C19.0423 16.2532 18.8992 16.3125 18.75 16.3125H15.75C15.6008 16.3125 15.4577 16.2532 15.3523 16.1477C15.2468 16.0423 15.1875 15.8992 15.1875 15.75C15.1875 15.6008 15.2468 15.4577 15.3523 15.3523C15.4577 15.2468 15.6008 15.1875 15.75 15.1875H18.75C18.8992 15.1875 19.0423 15.2468 19.1477 15.3523C19.2532 15.4577 19.3125 15.6008 19.3125 15.75ZM13.3125 15.75C13.3125 15.8992 13.2532 16.0423 13.1477 16.1477C13.0423 16.2532 12.8992 16.3125 12.75 16.3125H11.25C11.1008 16.3125 10.9577 16.2532 10.8523 16.1477C10.7468 16.0423 10.6875 15.8992 10.6875 15.75C10.6875 15.6008 10.7468 15.4577 10.8523 15.3523C10.9577 15.2468 11.1008 15.1875 11.25 15.1875H12.75C12.8992 15.1875 13.0423 15.2468 13.1477 15.3523C13.2532 15.4577 13.3125 15.6008 13.3125 15.75Z"
        fill="black"
      />
      <path
        d="M1.6875 6H-0.3125H1.6875ZM22.3125 6H20.3125H22.3125ZM21.1875 8.4375V10.4375H23.1875V8.4375H21.1875ZM2.8125 8.4375H0.8125V10.4375H2.8125V8.4375ZM2.8125 9.5625V7.5625H0.8125V9.5625H2.8125ZM21.1875 9.5625H23.1875V7.5625H21.1875V9.5625ZM19.3125 15.75H21.3125H19.3125ZM21 2.6875H3V6.6875H21V2.6875ZM3 2.6875C2.12147 2.6875 1.27892 3.03649 0.657709 3.65771L3.48614 6.48614C3.35721 6.61507 3.18234 6.6875 3 6.6875V2.6875ZM0.657709 3.65771C0.0364949 4.27892 -0.3125 5.12147 -0.3125 6H3.6875C3.6875 6.18234 3.61507 6.35721 3.48614 6.48614L0.657709 3.65771ZM-0.3125 6V18H3.6875V6H-0.3125ZM-0.3125 18C-0.3125 18.8785 0.0364953 19.7211 0.657709 20.3423L3.48614 17.5139C3.61507 17.6428 3.6875 17.8177 3.6875 18H-0.3125ZM0.657709 20.3423C1.27892 20.9635 2.12147 21.3125 3 21.3125V17.3125C3.18234 17.3125 3.35721 17.3849 3.48614 17.5139L0.657709 20.3423ZM3 21.3125H21V17.3125H3V21.3125ZM21 21.3125C21.8785 21.3125 22.7211 20.9635 23.3423 20.3423L20.5139 17.5139C20.6428 17.3849 20.8177 17.3125 21 17.3125V21.3125ZM23.3423 20.3423C23.9635 19.7211 24.3125 18.8785 24.3125 18H20.3125C20.3125 17.8177 20.3849 17.6428 20.5139 17.5139L23.3423 20.3423ZM24.3125 18V6H20.3125V18H24.3125ZM24.3125 6C24.3125 5.12147 23.9635 4.27892 23.3423 3.65771L20.5139 6.48614C20.3849 6.35721 20.3125 6.18234 20.3125 6H24.3125ZM23.3423 3.65771C22.7211 3.0365 21.8785 2.6875 21 2.6875V6.6875C20.8177 6.6875 20.6428 6.61507 20.5139 6.48614L23.3423 3.65771ZM3 7.8125H21V3.8125H3V7.8125ZM21 7.8125C20.5193 7.8125 20.0583 7.62154 19.7184 7.28163L22.5468 4.4532C22.1366 4.04296 21.5802 3.8125 21 3.8125V7.8125ZM19.7184 7.28163C19.3785 6.94172 19.1875 6.4807 19.1875 6H23.1875C23.1875 5.41984 22.957 4.86344 22.5468 4.4532L19.7184 7.28163ZM19.1875 6V8.4375H23.1875V6H19.1875ZM21.1875 6.4375H2.8125V10.4375H21.1875V6.4375ZM4.8125 8.4375V6H0.8125V8.4375H4.8125ZM4.8125 6C4.8125 6.4807 4.62154 6.94172 4.28163 7.28163L1.4532 4.4532C1.04297 4.86344 0.8125 5.41984 0.8125 6H4.8125ZM4.28163 7.28163C3.94172 7.62154 3.4807 7.8125 3 7.8125V3.8125C2.41984 3.8125 1.86344 4.04297 1.4532 4.4532L4.28163 7.28163ZM21 16.1875H3V20.1875H21V16.1875ZM3 16.1875C3.4807 16.1875 3.94172 16.3785 4.28163 16.7184L1.4532 19.5468C1.86344 19.957 2.41984 20.1875 3 20.1875V16.1875ZM4.28163 16.7184C4.62154 17.0583 4.8125 17.5193 4.8125 18H0.8125C0.8125 18.5802 1.04297 19.1366 1.4532 19.5468L4.28163 16.7184ZM4.8125 18V9.5625H0.8125V18H4.8125ZM2.8125 11.5625H21.1875V7.5625H2.8125V11.5625ZM19.1875 9.5625V18H23.1875V9.5625H19.1875ZM19.1875 18C19.1875 17.5193 19.3785 17.0583 19.7184 16.7184L22.5468 19.5468C22.957 19.1366 23.1875 18.5802 23.1875 18H19.1875ZM19.7184 16.7184C20.0583 16.3785 20.5193 16.1875 21 16.1875V20.1875C21.5802 20.1875 22.1366 19.957 22.5468 19.5468L19.7184 16.7184ZM17.3125 15.75C17.3125 15.3688 17.4639 15.0031 17.7335 14.7335L20.562 17.562C21.0425 17.0814 21.3125 16.4296 21.3125 15.75H17.3125ZM17.7335 14.7335C18.0031 14.4639 18.3688 14.3125 18.75 14.3125V18.3125C19.4296 18.3125 20.0814 18.0425 20.562 17.562L17.7335 14.7335ZM18.75 14.3125H15.75V18.3125H18.75V14.3125ZM15.75 14.3125C16.1312 14.3125 16.4969 14.4639 16.7665 14.7335L13.938 17.562C14.4186 18.0425 15.0704 18.3125 15.75 18.3125V14.3125ZM16.7665 14.7335C17.0361 15.0031 17.1875 15.3688 17.1875 15.75H13.1875C13.1875 16.4296 13.4575 17.0814 13.938 17.562L16.7665 14.7335ZM17.1875 15.75C17.1875 16.1312 17.0361 16.4969 16.7665 16.7665L13.938 13.938C13.4575 14.4186 13.1875 15.0704 13.1875 15.75H17.1875ZM16.7665 16.7665C16.4969 17.0361 16.1312 17.1875 15.75 17.1875V13.1875C15.0704 13.1875 14.4186 13.4575 13.938 13.938L16.7665 16.7665ZM15.75 17.1875H18.75V13.1875H15.75V17.1875ZM18.75 17.1875C18.3688 17.1875 18.0031 17.0361 17.7335 16.7665L20.562 13.938C20.0814 13.4575 19.4296 13.1875 18.75 13.1875V17.1875ZM17.7335 16.7665C17.4639 16.4969 17.3125 16.1312 17.3125 15.75H21.3125C21.3125 15.0704 21.0425 14.4186 20.562 13.938L17.7335 16.7665ZM11.3125 15.75C11.3125 15.3688 11.4639 15.0031 11.7335 14.7335L14.562 17.562C15.0425 17.0814 15.3125 16.4296 15.3125 15.75H11.3125ZM11.7335 14.7335C12.0031 14.4639 12.3688 14.3125 12.75 14.3125V18.3125C13.4296 18.3125 14.0814 18.0425 14.562 17.562L11.7335 14.7335ZM12.75 14.3125H11.25V18.3125H12.75V14.3125ZM11.25 14.3125C11.6312 14.3125 11.9969 14.4639 12.2665 14.7335L9.43804 17.562C9.9186 18.0425 10.5704 18.3125 11.25 18.3125V14.3125ZM12.2665 14.7335C12.536 15.0031 12.6875 15.3688 12.6875 15.75H8.6875C8.6875 16.4296 8.95748 17.0814 9.43804 17.562L12.2665 14.7335ZM12.6875 15.75C12.6875 16.1312 12.536 16.4969 12.2665 16.7665L9.43804 13.938C8.95748 14.4186 8.6875 15.0704 8.6875 15.75H12.6875ZM12.2665 16.7665C11.9969 17.0361 11.6312 17.1875 11.25 17.1875V13.1875C10.5704 13.1875 9.9186 13.4575 9.43804 13.938L12.2665 16.7665ZM11.25 17.1875H12.75V13.1875H11.25V17.1875ZM12.75 17.1875C12.3688 17.1875 12.0031 17.0361 11.7335 16.7665L14.562 13.938C14.0814 13.4575 13.4296 13.1875 12.75 13.1875V17.1875ZM11.7335 16.7665C11.4639 16.4969 11.3125 16.1312 11.3125 15.75H15.3125C15.3125 15.0704 15.0425 14.4186 14.562 13.938L11.7335 16.7665Z"
        fill="black"
        mask="url(#path-1-inside-1_250_1149)"
      />
    </svg>
  );
};
