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
        d="M9 15.5l3-3 3 3M9 11.5l3-3 3 3"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464.974.974 1.3 2.343 1.41 4.536"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default SvgComponent
