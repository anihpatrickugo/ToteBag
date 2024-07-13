import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <G
      stroke="#1D2939"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      clipPath="url(#a)"
    >
      <Path
        fill="#1D2939"
        d="M19.02.5C8.8.5.515 8.784.515 19.003c0 10.547 9.918 20.465 20.465 20.465 10.219 0 18.503-8.285 18.503-18.504C39.483 10.418 29.566.5 19.019.5h0Z"
      />
      <Path
        fill="#6CE9A6"
        d="M19.042 38.467c10.232 0 18.526-8.5 18.526-18.983C37.568 8.998 29.274.5 19.042.5 8.812.5.516 9 .516 19.483c0 10.485 8.295 18.984 18.526 18.984Z"
      />
      <Path
        fill="#fff"
        d="M27.706 10.956a2.531 2.531 0 0 0-3.582 0 30.43 30.43 0 0 0-5.218 5.763c-.581.775-1.153 1.557-1.714 2.346-1.947-1.5-3.426-2.55-4.05-2.629-1.06-.418-2.21.76-2.92 1.753-.71.993-1.577 2.404-.915 3.339.243.594 1.597 1.85 3.514 3.339 2.288 1.791 3.953 3.144 4.868 3.271 1.49.594 2.54-1.217 6.814-7a32.93 32.93 0 0 0 4.09-6.649 2.678 2.678 0 0 0-.887-3.534v.001Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h40v40H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SvgComponent
