import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      fill="#ED0006"
      fillRule="evenodd"
      d="M22.5 24.314a13.502 13.502 0 0 1-8.852 3.298C6.11 27.612 0 21.43 0 13.806 0 6.181 6.11 0 13.648 0c3.378 0 6.469 1.242 8.852 3.298A13.502 13.502 0 0 1 31.352 0C38.89 0 45 6.181 45 13.806c0 7.625-6.11 13.806-13.648 13.806-3.378 0-6.469-1.242-8.852-3.298Z"
      clipRule="evenodd"
    />
    <Path
      fill="#F9A000"
      fillRule="evenodd"
      d="M22.5 24.314a13.841 13.841 0 0 0 4.795-10.508A13.84 13.84 0 0 0 22.5 3.298 13.502 13.502 0 0 1 31.352 0C38.89 0 45 6.181 45 13.806c0 7.625-6.11 13.806-13.648 13.806-3.378 0-6.469-1.242-8.852-3.298Z"
      clipRule="evenodd"
    />
    <Path
      fill="#FF5E00"
      fillRule="evenodd"
      d="M22.5 3.298a13.841 13.841 0 0 1 4.795 10.508c0 4.208-1.86 7.976-4.795 10.508a13.841 13.841 0 0 1-4.795-10.508c0-4.207 1.86-7.975 4.795-10.508Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default SvgComponent
