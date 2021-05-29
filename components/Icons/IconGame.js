import IconBase from "./IconBase"
export const IconGame = ({ width, heigth, color, stroke }) => {
  return (
    <IconBase
      width={width}
      heigth={width}
      color={!color ? "transparent" : color}
      viewBox="0 0 29 28"
    >
      <path
        d="M10.3845 13.9239V18.9796"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.964 16.452H7.80551"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.1836 14.0778H19.0391"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.6318 18.9035H21.4873"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.3367 0V0C9.3367 0.999652 10.1636 1.81003 11.1835 1.81003H12.6098C14.1834 1.81564 15.458 3.06485 15.4651 4.60709V5.51841"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.6175 26.9495C16.5605 27.0182 12.5779 27.0154 8.66252 26.9495C4.31654 26.9495 1.13931 23.8496 1.13931 19.5902V13.3133C1.13931 9.0539 4.31654 5.954 8.66252 5.954C12.5994 5.8867 16.5848 5.88811 20.6175 5.954C24.9635 5.954 28.1393 9.05531 28.1393 13.3133V19.5902C28.1393 23.8496 24.9635 26.9495 20.6175 26.9495Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  )
}
