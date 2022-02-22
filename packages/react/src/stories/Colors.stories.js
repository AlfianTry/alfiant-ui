import { styled } from '@stitches/react';
import { foundations } from '@alfiant-ui/core';
import { useEffect } from 'react';

export default {
  title: 'Colors',
  parameters: {
    controls: {
      disabled: true,
    },
  },
};

const ColorBox = styled('div', {
});

export const Primary = () => {
  useEffect(() => {
    console.log(foundations)
  }, [])
  return <ColorBox>
    <p>{foundations.colors.blue01}</p>
  </ColorBox>

}
