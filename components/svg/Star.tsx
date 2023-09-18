import { SVGProps } from 'react';
interface StartProps extends SVGProps<SVGSVGElement> {
  filled: boolean;
}

const Start = ({ filled, ...props }: StartProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 12 12"
    className="w-[12px] h-[12px] xl:w-[18px] xl:h-[18px]"
    {...props}
  >
    {filled && (
      <path
        fill="#FFC000"
        d="m10.64 4.138-2.975-.433-1.33-2.696a.377.377 0 0 0-.673 0l-1.33 2.696-2.975.433a.374.374 0 0 0-.207.64l2.152 2.098-.508 2.964a.375.375 0 0 0 .544.395l2.66-1.4 2.662 1.4a.374.374 0 0 0 .544-.395l-.509-2.964 2.153-2.098a.374.374 0 0 0-.207-.64Z"
      />
    )}
  </svg>
);

export const StartProfile = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width="79"
    height="13"
    viewBox="0 0 79 13"
    {...props}
  >
    <path
      fill="#FBBC04"
      d="m2.285 12.297 1.388-4.54L0 5.13h4.54L5.972.35 7.406 5.13h4.54L8.273 7.758l1.388 4.54L5.973 9.49l-3.688 2.807ZM18.826 12.297l1.388-4.539-3.673-2.628h4.54L22.514.352l1.434 4.778h4.539l-3.673 2.628 1.388 4.54-3.688-2.808-3.688 2.807ZM35.367 12.297l1.389-4.539-3.674-2.628h4.54L39.055.352 40.49 5.13h4.54l-3.674 2.628 1.389 4.54-3.689-2.808-3.688 2.807ZM51.906 12.297l1.389-4.539L49.62 5.13h4.54L55.594.352l1.434 4.778h4.54l-3.674 2.628 1.389 4.54-3.689-2.808-3.688 2.807ZM68.447 12.297l1.389-4.539-3.673-2.628h4.54L72.135.352l1.433 4.778h4.54l-3.674 2.628 1.389 4.54-3.688-2.808-3.689 2.807Z"
    />
  </svg>
);

export default Start;
