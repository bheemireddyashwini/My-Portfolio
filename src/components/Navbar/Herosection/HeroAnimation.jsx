import styled from "styled-components";

const Div = styled.div`
  width: 600px;
  height: 500px;
  position: relative;
  overflow: hidden;
`;

const HeroAnimation = () => (
  <Div>
    <svg
      className="BgAnimation__svg"
      viewBox="0 0 600 500"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Rotating Circles */}
      <circle cx="100" cy="200" r="50" fill="url(#grad1)">
        <animate
          attributeName="cx"
          values="100;500;100"
          dur="6s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="r"
          values="50;70;50"
          dur="6s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 100 200"
          to="360 100 200"
          dur="8s"
          repeatCount="indefinite"
        />
      </circle>

      <circle cx="200" cy="300" r="60" fill="url(#grad2)">
        <animate
          attributeName="cy"
          values="300;100;300"
          dur="7s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="r"
          values="60;40;60"
          dur="7s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 200 300"
          to="360 200 300"
          dur="10s"
          repeatCount="indefinite"
        />
      </circle>

      <circle cx="400" cy="100" r="40" fill="url(#grad3)">
        <animate
          attributeName="cx"
          values="400;200;400"
          dur="5s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="r"
          values="40;60;40"
          dur="5s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 400 100"
          to="360 400 100"
          dur="9s"
          repeatCount="indefinite"
        />
      </circle>

      <circle cx="500" cy="250" r="70" fill="url(#grad4)">
        <animate
          attributeName="cy"
          values="250;400;250"
          dur="8s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="r"
          values="70;50;70"
          dur="8s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 500 250"
          to="360 500 250"
          dur="11s"
          repeatCount="indefinite"
        />
      </circle>

      {/* Gradients */}
      <defs>
        <radialGradient id="grad1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ff7f50" stopOpacity="1" />
          <stop offset="100%" stopColor="#ff6347" stopOpacity="0" />
        </radialGradient>

        <radialGradient id="grad2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#32cd32" stopOpacity="1" />
          <stop offset="100%" stopColor="#adff2f" stopOpacity="0" />
        </radialGradient>

        <radialGradient id="grad3" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1e90ff" stopOpacity="1" />
          <stop offset="100%" stopColor="#00bfff" stopOpacity="0" />
        </radialGradient>

        <radialGradient id="grad4" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ff1493" stopOpacity="1" />
          <stop offset="100%" stopColor="#ff69b4" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  </Div>
);

export default HeroAnimation;
