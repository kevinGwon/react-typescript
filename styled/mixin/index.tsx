import { css } from 'styled-components';

export const FullPos = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const hexToRgb = hex => {
  // http://stackoverflow.com/a/5624139
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

export const rgba = (hex, alpha) => {
  const color = hexToRgb(hex);
  return `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;
};

// @mixin ellipsis($line-cnt, $line-height) {
//   overflow: hidden;
//   text-overflow: ellipsis;
//   display: -webkit-box;
//   -webkit-line-clamp: $line-cnt;
//   /* 라인수 */
//   -webkit-box-orient: vertical;
//   word-wrap: break-word;
//   line-height: $line-height;
// }

// @mixin break-word {
//   word-break: keep-all;
//   word-wrap: break-word;
// }
