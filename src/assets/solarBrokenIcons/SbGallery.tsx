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
      <Circle cx={16} cy={8} r={2} stroke="#1C274C" strokeWidth={1.5} />
      <Path
        d="M2 10.154l.98-.141C9.96 9.01 15.925 15.03 14.858 22"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Path
        d="M22 13.385l-.973-.135c-2.844-.394-5.417 1.022-6.742 3.25"
        strokeWidth={2}
        strokeLinecap="round"
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
