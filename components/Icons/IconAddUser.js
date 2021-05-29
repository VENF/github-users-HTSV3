import IconBase from "./IconBase"
export const IconAddUser = ({ width, heigth, color, stroke }) => {
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
        d="M9.90875 16.5704C5.10375 16.5704 1 17.2966 1 20.2066C1 23.1166 5.07875 23.8691 9.90875 23.8691C14.715 23.8691 18.8175 23.1416 18.8175 20.2329C18.8175 17.3241 14.74 16.5704 9.90875 16.5704Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.90874 12.42C13.0625 12.42 15.6187 9.86375 15.6187 6.71C15.6187 3.55625 13.0625 1 9.90874 1C6.75624 1 4.19999 3.55625 4.19999 6.71C4.18874 9.8525 6.72624 12.4087 9.86999 12.42H9.90874Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.5676 8.39899V13.4115"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.125 10.9051H19.0125"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  )
}
