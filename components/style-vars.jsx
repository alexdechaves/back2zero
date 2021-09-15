export const mq = {
    xs: 0,
    sm: 53.125, // 850px
    md: 68, // 1088px
    lg: 84, // 1344px
    breakpoint (size) {
      return `@media(min-width: ${mq[size || 'xs']}em)`;
    },
    retina () {
      return `
        @media (min-resolution: 192dpi),
          (-webkit-min-device-pixel-ratio: 2),
          (min--moz-device-pixel-ratio: 2),
          (-o-min-device-pixel-ratio: 2/1),
          (min-device-pixel-ratio: 2),
          (min-resolution: 2dppx)
      `;
    },
  };