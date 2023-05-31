// icon:side_menu | System UIcons https://systemuicons.com/ | Corey Ginnivan
import * as React from "react";

function IconSide_menu(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 21 21"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7.5 6.5h8M7.5 10.498h5M7.5 14.5h8" />
        </g>
        <path
          fill="currentColor"
          d="M4.499 7.5c.5 0 1-.5 1-1s-.5-1-1-1-.999.5-.999 1 .499 1 .999 1zm0 4c.5 0 1-.5 1-1s-.5-1-1-1-.999.5-.999 1 .499 1 .999 1zm0 4c.5 0 1-.5 1-1s-.5-1-1-1-.999.5-.999 1 .499 1 .999 1z"
        />
      </g>
    </svg>
  );
}

export default IconSide_menu;
