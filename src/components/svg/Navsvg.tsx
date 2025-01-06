import * as React from "react"
import { SVGProps } from "react"
const Navsvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={15}
    fill="#fff"
    viewBox="0 -2 28 28"
    {...props}
  >
    <path d="M5.216 11.998a2.608 2.608 0 1 1-5.217 0 2.608 2.608 0 0 1 5.217 0zM5.216 2.608a2.608 2.608 0 1 1-5.217 0 2.608 2.608 0 0 1 5.217 0zM5.216 21.389a2.608 2.608 0 1 1-5.217 0 2.608 2.608 0 0 1 5.217 0zM9.794 0h15.247a2.61 2.61 0 1 1 0 5.22H9.794a2.61 2.61 0 1 1 0-5.22zM9.794 9.39h15.247a2.61 2.61 0 1 1 0 5.22H9.794a2.61 2.61 0 1 1 0-5.22zM9.794 18.781h15.247a2.61 2.61 0 1 1 0 5.22H9.794a2.61 2.61 0 1 1 0-5.22z" />
  </svg>
)
export default Navsvg