import React from 'react';
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

const GoogleIcon: React.FC<SvgProps> = (props) => (
  <Svg
    width={props.width ?? 21}
    height={props.height ?? 22}
    viewBox="0 0 21 22"
    fill="none"
    {...props}
  >
    <G clipPath="url(#clip0_3001_1903)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.5 11.232C20.5 10.5084 20.4351 9.81268 20.3145 9.14478H10.7041V13.0919H16.1958C15.9592 14.3674 15.2403 15.4481 14.1596 16.1717V18.732H17.4574C19.3869 16.9555 20.5 14.3396 20.5 11.232Z"
        fill="#4285F4"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.7042 21.2042C13.4593 21.2042 15.7691 20.2904 17.4575 18.732L14.1597 16.1717C13.2459 16.7839 12.0771 17.1457 10.7042 17.1457C8.0465 17.1457 5.79696 15.3507 4.99454 12.9388H1.58545V15.5826C3.26449 18.9175 6.71533 21.2042 10.7042 21.2042Z"
        fill="#34A853"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.99444 12.9388C4.79036 12.3266 4.6744 11.6726 4.6744 11C4.6744 10.3275 4.79036 9.67351 4.99444 9.06127V6.41748H1.58534C0.894249 7.79503 0.5 9.35348 0.5 11C0.5 12.6466 0.894249 14.2051 1.58534 15.5826L4.99444 12.9388Z"
        fill="#FBBC05"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.7042 4.85434C12.2023 4.85434 13.5474 5.36919 14.6049 6.38032L17.5317 3.4536C15.7645 1.80703 13.4547 0.795898 10.7042 0.795898C6.71533 0.795898 3.26449 3.08254 1.58545 6.41743L4.99454 9.06121C5.79696 6.64934 8.0465 4.85434 10.7042 4.85434Z"
        fill="#EA4335"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_3001_1903">
        <Rect width="20" height="20.4082" fill="white" transform="translate(0.5 0.795898)" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default GoogleIcon;
