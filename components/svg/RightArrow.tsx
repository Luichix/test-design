import * as React from 'react';
import { SVGProps } from 'react';
const RightArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width="20px"
    height="20px"
    {...props}
  >
    <path
      fill="#fff"
      d="m6.25 4.508.809-.758L13.75 10l-6.691 6.25-.809-.754L12.129 10 6.25 4.508Z"
    />
  </svg>
);

export const RightArrowMedium = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    className="w-[14px] h-[15px] xl:w-[18px] xl:h-[15px]"
    {...props}
  >
    <path
      fill="#fff"
      d="M13.199 8.199a.988.988 0 0 0 0-1.398L6.91.512A.988.988 0 1 0 5.512 1.91l5.59 5.59-5.59 5.59a.988.988 0 1 0 1.398 1.398l6.289-6.29ZM.5 8.489h12V6.511H.5v1.976Z"
    />
  </svg>
);
export default RightArrow;
