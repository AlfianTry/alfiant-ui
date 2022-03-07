import React from 'react';
import { styled } from '@stitches/react';
import { CheckIcon } from '@radix-ui/react-icons';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';

const StyledIndicator = styled(CheckboxPrimitive.Indicator, {
  alignItems: 'center',
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  width: '100%',
});

const StyledCheckbox = styled(CheckboxPrimitive.Root, {
  all: 'unset',
  backgroundColor: 'white',
  width: '10px',
  height: '10px',
  border: '3px solid #C0C4C4',
  borderRadius: '3px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&:hover': { border: '3px solid #36D4B1', },
  '&:focus': { outline: `3px solid #82C4E0`, outlineOffset: '1px' },
  '&[data-state=checked]': {
    backgroundColor: '#04C99E',
    // boxShadow: 'inset 0 0 0 1px transparent',
    border: '3px solid #04C99E',
    color: 'white',
    '&:hover': {
      backgroundColor: '#03A17E',
      border: '3px solid #03A17E'
    },
    '&:focus': {
    },
  },

  '&:disabled': {
    pointerEvents: 'none',
    // backgroundColor: '#DADDDD',
    // '&::placeholder': {
    //   color: '#A5ABAB',
    // },

    // [`& ${StyledIndicator}`]: {
    //   '&::after': {
    //     backgroundColor: '#DADDDD',
    //   },
    // },
    '&[data-state=checked]': {
      backgroundColor: '#DADDDD',
      // boxShadow: 'inset 0 0 0 1px transparent',
      border: '3px solid #DADDDD',
      color: 'white',
    },
  },
});

// Your app...
const Flex = styled('div', { display: 'flex', width: 'fit-content' });
const Label = styled('label', {
  color: 'black',
  fontSize: 15,
  lineHeight: 1,
  paddingLeft: '12px',
  variants: {
    disabled: {
      true: {
        color: '#A5ABAB'
      }
    }
  }
});

export const Checkbox = (props) => (
  <Flex css={{ alignItems: 'center' }}>
    <StyledCheckbox disabled={props.disabled} defaultChecked>
      <StyledIndicator>
        <CheckIcon />
      </StyledIndicator>
    </StyledCheckbox>
    <Label disabled={props.disabled}>
      {props.label}
    </Label>
  </Flex>
);

export default Checkbox;
