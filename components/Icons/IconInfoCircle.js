import IconBase from "./IconBase"
export const IconInfoCircle = ({ width, heigth, color, stroke }) => {
  return (
    <IconBase
      width={width}
      heigth={width}
      color={!color ? "transparent" : color}
      viewBox="0 0 24 24"
    >
      <path
        id="Stroke 1"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.0001 2.7501C17.1081 2.7501 21.2501 6.8911 21.2501 12.0001C21.2501 17.1081 17.1081 21.2501 12.0001 21.2501C6.89111 21.2501 2.75011 17.1081 2.75011 12.0001C2.75011 6.8911 6.89111 2.7501 12.0001 2.7501Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        id="Stroke 3"
        d="M11.9952 8.2042V12.6232"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        id="Stroke 5"
        d="M11.995 15.7961H12.005"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  )
}
