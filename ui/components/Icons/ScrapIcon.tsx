import { Props } from "./types";

const DateIcon = (props?: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <rect
        x="3"
        y="2"
        width="18"
        height="20"
        rx="2"
        stroke="#6D6D6D"
        strokeWidth="2"
        fill="currentColor"
      />
      <path
        d="M8 7H16M8 11.5H16M8 16H13.2"
        stroke="#6D6D6D"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="currentColor"
      />
    </svg>
  );
};

export default DateIcon;
