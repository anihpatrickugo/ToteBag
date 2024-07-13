import * as React from "react"
import Svg, {
  SvgProps,
  Mask,
  Path,
  G,
  Defs,
  Pattern,
  Use,
  Image,
} from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="none"
    {...props}
  >
    <Mask
      id="b"
      width={20}
      height={25}
      x={19}
      y={3}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <Mask
        id="a"
        width={20}
        height={25}
        x={19}
        y={3}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path
          fill="#fff"
          d="m20.409 19.918 9.584-16.602 5.22 3.014a7.047 7.047 0 0 1 2.58 9.628l-5.398 9.348a4.41 4.41 0 0 1-6.018 1.614l-4.846-2.797a3.081 3.081 0 0 1-1.122-4.205Z"
        />
      </Mask>
      <G mask="url(#a)">
        <Path fill="#fff" d="M38.738.006H-.303v33.065h39.041V.006Z" />
      </G>
    </Mask>
    <G mask="url(#b)">
      <Mask
        id="c"
        width={20}
        height={25}
        x={19}
        y={3}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M38.739 3.26H19.975v24.287h18.764V3.26Z" />
      </Mask>
      <G mask="url(#c)">
        <Path
          fill="url(#d)"
          d="M0 0h19.975v24.817H0z"
          transform="matrix(1 0 0 -1 19.654 27.8)"
        />
      </G>
    </G>
    <Path
      fill="#FDBD00"
      d="M19.39 8.392 7.465 29.042l5.22 3.014a7.05 7.05 0 0 0 9.629-2.58l7.733-13.395a4.405 4.405 0 0 0-1.614-6.018l-4.846-2.796a3.071 3.071 0 0 0-4.199 1.125Z"
    />
    <Path
      fill="#2DA94F"
      d="M29.995 3.314 26.3 1.182c-4.212-2.433-9.6-.99-12.034 3.225L7.413 16.274a4.405 4.405 0 0 0 1.614 6.018l3.695 2.131a4.405 4.405 0 0 0 6.018-1.614l8.18-14.17a6.151 6.151 0 0 1 8.406-2.252l-5.331-3.073Z"
    />
    <Mask
      id="f"
      width={18}
      height={28}
      x={0}
      y={5}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <Mask
        id="e"
        width={18}
        height={28}
        x={0}
        y={5}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path
          fill="#fff"
          d="m15.329 7.885-4.077-2.349a3.804 3.804 0 0 0-5.189 1.387L1.17 15.376c-2.408 4.16-.98 9.482 3.19 11.885l3.106 1.787 3.764 2.17 1.633.939c-2.9-1.942-3.82-5.833-2.049-8.894l1.267-2.188 4.638-8.013a3.783 3.783 0 0 0-1.39-5.177Z"
        />
      </Mask>
      <G mask="url(#e)">
        <Path fill="#fff" d="M38.74.007H-.303V33.07h39.041V.007Z" />
      </G>
    </Mask>
    <G mask="url(#f)">
      <Mask
        id="g"
        width={19}
        height={28}
        x={-1}
        y={5}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M17.25 5H0v27.163h17.25V5Z" />
      </Mask>
      <G mask="url(#g)">
        <Path
          fill="url(#h)"
          d="M0 0h18.159v27.541H0z"
          transform="matrix(1 0 0 -1 -.206 32.328)"
        />
      </G>
    </G>
    <Defs>
      <Pattern
        id="d"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#i" transform="scale(.00752 .00606)" />
      </Pattern>
      <Pattern
        id="h"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#j" transform="scale(.00826 .00546)" />
      </Pattern>
      <Image
        xlinkHref="data:image/jpeg;base64,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"
        id="i"
        width={133}
        height={165}
      />
      <Image
        xlinkHref="data:image/jpeg;base64,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"
        id="j"
        width={121}
        height={183}
      />
    </Defs>
  </Svg>
)
export default SvgComponent
