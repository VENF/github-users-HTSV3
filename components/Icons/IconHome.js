import IconBase from "./IconBase"
export const IconHome = ({ width, heigth, color, stroke }) => {
  return (
    <IconBase
      width={width}
      heigth={width}
      color={!color ? "transparent" : color}
      viewBox="0 0 26 27"
    >
      <path
        d="M9.32152 24.4643V20.6308C9.3215 19.6558 10.1164 18.8635 11.1013 18.857H14.7089C15.6984 18.857 16.5006 19.6512 16.5006 20.6308V20.6308V24.4762C16.5004 25.304 17.1678 25.9806 18.0038 26H20.4089C22.8064 26 24.75 24.0758 24.75 21.7023V21.7023V10.7973C24.7372 9.86353 24.2943 8.98669 23.5475 8.41629L15.3222 1.85663C13.8812 0.714458 11.8328 0.714458 10.3918 1.85663L2.20253 8.4282C1.45282 8.99628 1.00923 9.87458 1 10.8092V21.7023C1 24.0758 2.94359 26 5.34114 26H7.7462C8.60294 26 9.29747 25.3124 9.29747 24.4643V24.4643"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  )
}
