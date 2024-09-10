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
        d="M15 5H9.5c-.935 0-1.402 0-1.75.201a1.5 1.5 0 00-.549.549C7 6.098 7 6.565 7 7.5s0 1.402.201 1.75a1.5 1.5 0 00.549.549C8.098 10 8.565 10 9.5 10h9c.935 0 1.402 0 1.75-.201a1.5 1.5 0 00.549-.549C21 8.902 21 8.435 21 7.5s0-1.402-.201-1.75a1.5 1.5 0 00-.549-.549c-.28-.161-.636-.193-1.25-.2"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Path
        d="M7 16.5c0-.935 0-1.402.201-1.75a1.5 1.5 0 01.549-.549C8.098 14 8.565 14 9.5 14h6c.935 0 1.402 0 1.75.201a1.5 1.5 0 01.549.549c.201.348.201.815.201 1.75s0 1.402-.201 1.75a1.5 1.5 0 01-.549.549c-.348.201-.815.201-1.75.201h-6c-.935 0-1.402 0-1.75-.201a1.5 1.5 0 01-.549-.549C7 17.902 7 17.435 7 16.5z"
        strokeWidth={2}
      />
      <Path
        d="M3 14V2m0 20v-4"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default SvgComponent
