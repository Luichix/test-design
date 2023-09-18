import { SVGProps } from 'react';
const LeftArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20px"
    height="20px"
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="m13.75 4.508-.809-.758L6.25 10l6.691 6.25.809-.754L7.871 10l5.879-5.492Z"
    />
  </svg>
);
export default LeftArrow;
