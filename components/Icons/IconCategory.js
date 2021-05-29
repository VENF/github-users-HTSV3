import IconBase from "./IconBase"
export const IconCategory = ({ width, heigth, color, stroke }) => {
  return (
    <IconBase
      width={width}
      heigth={width}
      color={!color ? "transparent" : color}
      viewBox="0 0 25 25"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.875 5.375C0.875 2.09348 0.910137 1 5.25 1C9.58986 1 9.625 2.09348 9.625 5.375C9.625 8.65652 9.63884 9.75 5.25 9.75C0.861159 9.75 0.875 8.65652 0.875 5.375Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.625 5.375C14.625 2.09348 14.6601 1 19 1C23.3399 1 23.375 2.09348 23.375 5.375C23.375 8.65652 23.3888 9.75 19 9.75C14.6112 9.75 14.625 8.65652 14.625 5.375Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.875 19.125C0.875 15.8435 0.910137 14.75 5.25 14.75C9.58986 14.75 9.625 15.8435 9.625 19.125C9.625 22.4065 9.63884 23.5 5.25 23.5C0.861159 23.5 0.875 22.4065 0.875 19.125Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.625 19.125C14.625 15.8435 14.6601 14.75 19 14.75C23.3399 14.75 23.375 15.8435 23.375 19.125C23.375 22.4065 23.3888 23.5 19 23.5C14.6112 23.5 14.625 22.4065 14.625 19.125Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  )
}
