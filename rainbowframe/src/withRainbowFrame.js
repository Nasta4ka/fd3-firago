import React from "react";

export default function withRainbowFrame(colors) {
  return function (Comp) {
    return function (props) {
      let code = <Comp {...props} />;
      for (let color of colors) {
        code = (
          <div style={{ border: `3px solid ${color}`, padding: `3px` }}>
            {code}
          </div>
        );
      }

      return <>{code}</>;
    };
  };
}
