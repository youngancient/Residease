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
`
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
      <g clip-path="url(#clip0_256_1251)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
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
