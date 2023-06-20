import React from "react";
import ContentLoader from "react-content-loader";
import "../../../App.scss";
import {
  DEFAULT_PLACEHOLDER_CONFIG,
  PLACEHOLDER_BG_COLOR,
  PLACEHOLDER_FG_COLOR,
} from "../../../utils/Constants";

const QPlaceholder = ({
  speed = DEFAULT_PLACEHOLDER_CONFIG.speed,
  width = DEFAULT_PLACEHOLDER_CONFIG.width,
  height = DEFAULT_PLACEHOLDER_CONFIG.height,
  children = DEFAULT_PLACEHOLDER_CONFIG.children || [],
  containerStartX = DEFAULT_PLACEHOLDER_CONFIG.containerStartX,
  containerStartY = DEFAULT_PLACEHOLDER_CONFIG.containerStartY,
  ...otherProps
}) => {
  const renderChildren = () => {
    let formatedChildren = [...children];
    if (formatedChildren.length) {
      return formatedChildren.map((child = {}) => {
        if (child.type == "circle") {
          return (
            <circle
              cx={child.posX}
              cy={child.posY}
              r={child.radiusX || child.radiusY}
            />
          );
        } else {
          return (
            <rect
              x={child.posX}
              y={child.posY}
              rx={child.radiusX}
              ry={child.radiusY}
              width={child.width}
              height={child.height}
            />
          );
        }
      });
    }
    return null;
  };

  return (
    <ContentLoader
      speed={speed}
      width={width}
      height={height}
      viewBox={`${containerStartX} ${containerStartY} ${width} ${height}`}
      backgroundColor={PLACEHOLDER_BG_COLOR}
      foregroundColor={PLACEHOLDER_FG_COLOR}
      {...otherProps}
    >
      {renderChildren()}
    </ContentLoader>
  );
};

export default QPlaceholder;
