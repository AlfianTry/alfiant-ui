import { styled } from '@stitches/react';

const StyledButton = styled('button', {
  backgroundColor: 'gainsboro',
  borderRadius: '9999px',
  fontSize: '13px',
  padding: '10px 15px',
  '&:hover': {
    backgroundColor: 'lightgray',
  },
  cursor: 'pointer'
});

export function Button({ children }) {
  return (
    <StyledButton>{children}</StyledButton>
  );
}

export default Button;
