import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

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
      className="feather feather-plus-circle"
      {...props}
    >
      <Circle cx={12} cy={12} r={10} />
      <Path d="M12 8L12 16" />
      <Path d="M8 12L16 12" />
    </Svg>
  )
}

export default SvgComponent
