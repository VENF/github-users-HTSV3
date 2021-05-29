import IconBase from "./IconBase"
export const IconCard = ({ width, heigth, color, stroke }) => {
  return (
    <IconBase
      width={width}
      heigth={width}
      color={!color ? "transparent" : color}
      viewBox="0 0 30 30"
    >
        <path
          id="Stroke 1"
          d="M3.43762 4.06238L6.03762 4.51238L7.24137 18.8536C7.33762 20.0249 8.31637 20.9236 9.49137 20.9199H23.1276C24.2489 20.9224 25.2001 20.0974 25.3589 18.9874L26.5451 10.7899C26.6776 9.87363 26.0414 9.02363 25.1264 8.89113C25.0464 8.87988 6.45512 8.87363 6.45512 8.87363"
          stroke={stroke}
          strokewidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 3"
          d="M17.6564 13.4935H21.1226"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 5"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.943 25.2531C9.31925 25.2531 9.623 25.5581 9.623 25.9331C9.623 26.3094 9.31925 26.6144 8.943 26.6144C8.56675 26.6144 8.263 26.3094 8.263 25.9331C8.263 25.5581 8.56675 25.2531 8.943 25.2531Z"
          fill={color}
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 7"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.0434 25.2531C23.4197 25.2531 23.7247 25.5581 23.7247 25.9331C23.7247 26.3094 23.4197 26.6144 23.0434 26.6144C22.6672 26.6144 22.3634 26.3094 22.3634 25.9331C22.3634 25.5581 22.6672 25.2531 23.0434 25.2531Z"
          fill={color}
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
    </IconBase>
  )
}
