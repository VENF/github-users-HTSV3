import IconBase from "./IconBase"
export const IconLogout = ({ width, heigth, color, stroke }) => {
  return (
    <IconBase
      width={width}
      heigth={width}
      color={!color ? "transparent" : color}
      viewBox="0 0 27 26"
    >
      <path
        d="M16.77 7.23686V6.07061C16.77 3.52686 14.7075 1.46436 12.1638 1.46436H6.07003C3.52753 1.46436 1.46503 3.52686 1.46503 6.07061V19.9831C1.46503 22.5269 3.52753 24.5894 6.07003 24.5894H12.1763C14.7125 24.5894 16.77 22.5331 16.77 19.9969V18.8181"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.2619 13.0267H10.2106"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.6015 9.38287L25.2615 13.0266L21.6015 16.6716"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  )
}
