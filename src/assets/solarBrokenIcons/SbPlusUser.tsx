import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function SvgComponent(props: any): JSX.Element {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={10} cy={6} r={4} strokeWidth={2} />
      <Path
        d="M21 10h-2m0 0h-2m2 0V8m0 2v2M17.997 18c.003-.164.003-.331.003-.5 0-2.485-3.582-4.5-8-4.5s-8 2.015-8 4.5S2 22 10 22c2.231 0 3.84-.157 5-.437"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default SvgComponent
