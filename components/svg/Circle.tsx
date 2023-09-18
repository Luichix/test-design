import * as React from 'react';
import { SVGProps } from 'react';
const Circle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width="12px"
    height="12px"
    {...props}
  >
    <circle cx={6} cy={6} r={6} fill="#E3EEFF" />
    <circle cx={6} cy={6} r={3} fill="#2C7EF8" />
  </svg>
);
export default Circle;
