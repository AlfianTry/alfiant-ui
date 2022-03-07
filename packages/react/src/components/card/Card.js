import { styled } from '../../config/stitches.config';
import { elevationVariants } from '../elevation/Elevation'

const Card = styled('div', {
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  font: 'inherit',
  lineHeight: '1',
  outline: 'none',
  padding: '$3',
  textAlign: 'inherit',
  verticalAlign: 'middle',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',

  backgroundColor: 'white',
  display: 'block',
  textDecoration: 'none',
  color: 'inherit',
  borderRadius: '8px',
  position: 'relative',

  '&::before': {
    boxSizing: 'border-box',
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: '$3',
    pointerEvents: 'none',
  },

  variants: {
    elevation: elevationVariants,
    variant: {
      inner: {
        backgroundColor: 'rgba(255,255,255,.07)',
      },
      ghost: {
        backgroundColor: 'none',
        boxShadow: 'none',
      },
    },
    interactive: {
      true: {
        '@hover': {
          '&:hover': {
            cursor: 'pointer',
            '&::before': {
              boxShadow: 'inset 0 0 0 1px $colors$cardHoverBorder',
              backgroundColor: '$cardHoverBackground',
            },
          },
        },
      },
    },
    active: {
      true: {
        '&::before': {
          boxShadow: 'inset 0 0 0 1px $colors$cardActiveBorder',
          backgroundColor: '$cardActiveBackground',
        },
      },
    },
  },
  defaultVariants: {
    elevation: 1,
  },
});

export default Card;
