import { SVGProps } from 'react';
const Money = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width="22px"
    height="22px"
    {...props}
  >
    <path
      fill="#fff"
      d="M12.556 3.998a.55.55 0 0 0 0-.777L10.223.888a.55.55 0 0 0-.778.777l1.097 1.097A8.25 8.25 0 0 0 6.06 17.607a.55.55 0 0 0 .66-.88 7.15 7.15 0 0 1 5.819-12.71l.017-.019ZM9.446 18l.017-.017c.449.099.914.154 1.39.165l-.006.006a.554.554 0 0 1 .081-.004 7.15 7.15 0 0 0 4.355-12.877.551.551 0 0 1 .66-.88 8.25 8.25 0 0 1-4.482 14.845l1.095 1.095a.548.548 0 0 1-.174.905.552.552 0 0 1-.604-.127l-2.333-2.332a.55.55 0 0 1 0-.779Zm4.144-9.04a.548.548 0 0 1 0 .78l-3.3 3.3a.55.55 0 0 1-.779 0l-1.65-1.65a.55.55 0 1 1 .78-.78l1.26 1.262 2.91-2.912a.55.55 0 0 1 .78 0ZM5.5 11a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0ZM11 6.6a4.4 4.4 0 1 0 0 8.8 4.4 4.4 0 0 0 0-8.8Z"
    />
  </svg>
);
export default Money;
