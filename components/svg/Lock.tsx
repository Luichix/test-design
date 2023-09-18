import { SVGProps } from 'react';
const Lock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 13 13"
    className="w-[13px] h-[13px] xl:w-[16px] xl:h-[16px]"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.333}
      d="M10.385 5.957H2.802c-.598 0-1.083.485-1.083 1.084v3.791c0 .599.485 1.084 1.083 1.084h7.583c.599 0 1.084-.485 1.084-1.084V7.041c0-.599-.485-1.084-1.084-1.084ZM3.887 5.957V3.791a2.708 2.708 0 1 1 5.416 0v2.166"
    />
  </svg>
);

export const LockDark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width="12px"
    height="12px"
    {...props}
  >
    <g
      stroke="#696969"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.333}
      clipPath="url(#a)"
    >
      <path d="M9.625 5.999h-7a1 1 0 0 0-1 1v3.5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1Z" />
      <path d="M3.626 5.999v-2a2.5 2.5 0 1 1 5 0v2" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.5.5h12v12H.5z" />
      </clipPath>
    </defs>
  </svg>
);
export default Lock;
