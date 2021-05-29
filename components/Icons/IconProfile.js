import IconBase from "./IconBase"
export const IconProfile = ({ width, heigth, color, stroke }) => {
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
          d="M11.9847 15.3462C8.11713 15.3462 4.81427 15.931 4.81427 18.2729C4.81427 20.6148 8.09617 21.2205 11.9847 21.2205C15.8524 21.2205 19.1543 20.6348 19.1543 18.2938C19.1543 15.9529 15.8733 15.3462 11.9847 15.3462Z"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 3"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.9848 12.0059C14.5229 12.0059 16.58 9.94782 16.58 7.40972C16.58 4.87163 14.5229 2.81448 11.9848 2.81448C9.44667 2.81448 7.38858 4.87163 7.38858 7.40972C7.38001 9.93925 9.42382 11.9973 11.9524 12.0059H11.9848Z"
          stroke={stroke}
          strokeWidth="1.42857"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
    </IconBase>
  )
}
