import { styled } from '@stitches/react';
import { PlusIcon } from '@radix-ui/react-icons';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

const StyledContent = styled(TooltipPrimitive.Content, {
  borderRadius: 4,
  padding: '10px 15px',
  fontSize: 15,
  lineHeight: 1,
  color: 'Violet',
  backgroundColor: 'white',
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
});

const StyledArrow = styled(TooltipPrimitive.Arrow, {
  fill: 'white',
});

// Exports
const Provider = TooltipPrimitive.Provider;
const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;
const TooltipContent = StyledContent;

// Your app...
const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 35,
  width: 35,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'Violet',
  backgroundColor: 'white',
  boxShadow: `0 2px 10px black`,
  '&:hover': { backgroundColor: 'Violet' },
  '&:focus': { boxShadow: `0 0 0 2px black` },
});

const TooltipDemo = () => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <IconButton>
          <PlusIcon />
        </IconButton>
      </TooltipTrigger>
      <StyledContent sideOffset={5} >
        Add to library
        <StyledArrow />
      </StyledContent>
    </Tooltip>
  );
};

export default TooltipDemo;
