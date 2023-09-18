import { SVGProps } from 'react';
const Check = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="#fff"
    viewBox="0 0 13 9"
    className="w-[13px] h-[9px] xl:w-[23px] xl:h-[18px]"
    {...props}
  >
    <path
      stroke={props.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M1.5 4.5 4.83 8l6.67-7"
    />
  </svg>
);

export const CheckMedium = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    className="w-[16px] h-[16px] xl:w-[22px] xl:h-[22px]"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      stroke="#2C7EF8"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="m2 8 3.995 4L14 4"
    />
  </svg>
);

export default Check;
