import React from 'react';
import { styled } from '@stitches/react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

const StyledIndicator = styled(RadioGroupPrimitive.Indicator, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  position: 'relative',
  '&::after': {
    content: '""',
    display: 'block',
    width: 11,
    height: 11,
    borderRadius: '50%',
    backgroundColor: '#04C99E',
  },
});

const StyledRadio = styled(RadioGroupPrimitive.Item, {
  all: 'unset',
  backgroundColor: 'white',
  width: 25,
  height: 25,
  borderRadius: '100%',
  boxShadow: `0 2px 10px #C0C4C4`,
  '&:hover': { backgroundColor: '#C0C4C4' },
  '&:focus': { boxShadow: `0 0 0 2px black` },
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


const RadioGroup = RadioGroupPrimitive.Root;

export const Radio = (props) => (
  <RadioGroup defaultValue="male" aria-label="View density">
    <Flex css={{ margin: '10px 0', alignItems: 'center' }}>
      <StyledRadio value="male" id="r1">
        <StyledIndicator />
      </StyledRadio>
      <Label htmlFor="r1">Laki-laki</Label>
    </Flex>
    <Flex css={{ margin: '10px 0', alignItems: 'center' }}>
      <StyledRadio value="female" id="r2">
        <StyledIndicator />
      </StyledRadio>
      <Label htmlFor="r2">Perempuan</Label>
    </Flex>
  </RadioGroup>
  // <Flex css={{ alignItems: 'center' }}>
  //   <StyledRadioGroup disabled={props.disabled} defaultChecked>
  //     <StyledIndicator>
  //       <CheckIcon />
  //     </StyledIndicator>
  //   </StyledRadioGroup>
  //   <Label disabled={props.disabled}>
  //     {props.label}
  //   </Label>
  // </Flex>
);

export default Radio;
