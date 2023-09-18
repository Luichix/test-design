import { SVGProps } from 'react';
const Percentage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    className="w-[24px] h-[24px] xl:w-[32px] xl:h-[32px]"
    {...props}
  >
    <circle cx={12} cy={12} r={12} fill="#2C7EF8" />
    <mask
      id="a"
      width={16}
      height={16}
      x={4}
      y={4}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path fill="#D9D9D9" d="M4.8 4.8h14.4v14.4H4.8z" />
    </mask>
    <g mask="url(#a)">
      <path
        fill="#fff"
        d="M9.3 11.4c-.58 0-1.075-.205-1.485-.615A2.023 2.023 0 0 1 7.2 9.3c0-.58.205-1.075.615-1.485.41-.41.905-.615 1.485-.615.58 0 1.075.205 1.485.615.41.41.615.905.615 1.485 0 .58-.205 1.075-.615 1.485-.41.41-.905.615-1.485.615Zm0-1.2c.25 0 .462-.087.637-.262A.868.868 0 0 0 10.2 9.3a.868.868 0 0 0-.263-.637A.868.868 0 0 0 9.3 8.4a.868.868 0 0 0-.638.263.868.868 0 0 0-.262.637c0 .25.087.463.262.638a.868.868 0 0 0 .638.262Zm5.4 6.6c-.58 0-1.075-.205-1.485-.615A2.023 2.023 0 0 1 12.6 14.7c0-.58.205-1.075.615-1.485.41-.41.905-.615 1.485-.615.58 0 1.075.205 1.485.615.41.41.615.905.615 1.485 0 .58-.205 1.075-.615 1.485-.41.41-.905.615-1.485.615Zm0-1.2c.25 0 .463-.087.638-.262a.868.868 0 0 0 .262-.638.868.868 0 0 0-.262-.637.868.868 0 0 0-.638-.263.868.868 0 0 0-.637.263.868.868 0 0 0-.263.637c0 .25.087.463.262.638a.868.868 0 0 0 .638.262Zm-7.08.78a.569.569 0 0 1-.165-.42c0-.17.055-.31.165-.42l7.92-7.92c.11-.11.25-.165.42-.165.17 0 .31.055.42.165.11.11.165.25.165.42 0 .17-.055.31-.165.42l-7.92 7.92a.569.569 0 0 1-.42.165.569.569 0 0 1-.42-.165Z"
      />
    </g>
  </svg>
);
export default Percentage;
