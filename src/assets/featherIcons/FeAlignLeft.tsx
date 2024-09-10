import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props: any): JSX.Element {
  return (
    <Svg

      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-align-left"
      {...props}
    >
      <Path d="M17 10L3 10" />
      <Path d="M21 6L3 6" />
      <Path d="M21 14L3 14" />
      <Path d="M17 18L3 18" />
    </Svg>
  )
}

export default SvgComponent
