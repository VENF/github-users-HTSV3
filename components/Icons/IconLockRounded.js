import IconBase from "./IconBase"
export const IconLockRounded = ({ width, heigth, color, stroke }) => {
  return (
    <IconBase
      width={width}
      heigth={width}
      color={!color ? "transparent" : color}
      viewBox="0 0 24 24"
    >
       <path
          id="Stroke 1"
          d="M16.4234 9.4478V7.3008C16.4234 4.7878 14.3854 2.7498 11.8724 2.7498C9.3594 2.7388 7.3134 4.7668 7.3024 7.2808V7.3008V9.4478"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 3"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.6832 21.2496H8.04221C5.94821 21.2496 4.25021 19.5526 4.25021 17.4576V13.1686C4.25021 11.0736 5.94821 9.37659 8.04221 9.37659H15.6832C17.7772 9.37659 19.4752 11.0736 19.4752 13.1686V17.4576C19.4752 19.5526 17.7772 21.2496 15.6832 21.2496Z"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 5"
          d="M11.8629 14.2027V16.4237"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
    </IconBase>
  )
}
