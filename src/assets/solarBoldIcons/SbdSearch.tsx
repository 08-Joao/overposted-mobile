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
        d="M20.313 11.157a9.157 9.157 0 11-18.313 0 9.157 9.157 0 0118.313 0z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.838 18.838a.723.723 0 011.023 0l1.927 1.928a.723.723 0 01-1.022 1.022l-1.928-1.927a.723.723 0 010-1.023z"
      />
    </Svg>
  )
}

export default SvgComponent
