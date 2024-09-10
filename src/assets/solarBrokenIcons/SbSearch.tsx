import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props: any): JSX.Element {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M20 20l2 2M6.75 3.27a9.5 9.5 0 11-3.48 3.48"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default SvgComponent
