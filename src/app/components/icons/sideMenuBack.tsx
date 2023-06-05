// icon:backburger | Material Design Icons https://materialdesignicons.com/ | Austin Andrews
import * as React from "react";

function IconBackburger(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M5 13l4 4-1.4 1.42L1.18 12 7.6 5.58 9 7l-4 4h16v2H5m16-7v2H11V6h10m0 10v2H11v-2h10z" />
    </svg>
  );
}

export default IconBackburger;
