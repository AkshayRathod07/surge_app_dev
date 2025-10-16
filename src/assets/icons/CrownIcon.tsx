import React from 'react';
import Svg, { Defs, LinearGradient, Path, Stop } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

const CrownIcon: React.FC<SvgProps> = (props) => (
  <Svg
    width={props.width ?? 238}
    height={props.height ?? 165}
    viewBox="0 0 238 165"
    fill="none"
    {...props}
  >
    <Path
      d="M117.176 0.248291L88.1232 52.2264L76.1408 75.0239L74.317 73.2001C68.739 76.2622 59.0045 71.1802 53.3434 69.5288C37.3068 64.8498 17.0608 56.3564 0.453369 55.874V58.6097C7.52696 62.6239 10.8061 76.1282 14.3571 83.2309L43.5378 141.592C46.5644 147.646 50.1463 160.453 55.7481 164.364C89.3249 164.745 182.477 164.752 182.477 164.752C188.927 161.717 194.061 144.219 197.198 137.945C206.289 119.762 214.78 101.295 224.103 83.2309C228.599 74.5205 235.799 64.6483 237.547 54.9621C225.901 56.4881 214.229 61.2248 201.983 64.9702C188.445 69.1111 174.59 72.1167 160.947 75.9358C158.092 66.2295 150.522 57.2036 145.542 48.4366C136.878 33.1833 129.299 12.9164 117.176 0.248291Z"
      fill="url(#paint0_linear_968_1812)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_968_1812"
        x1="119"
        y1="0.248291"
        x2="119"
        y2="165.998"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset="0" stopColor="#E89C25" />
        <Stop offset="1" stopColor="#FFBE58" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default CrownIcon;
