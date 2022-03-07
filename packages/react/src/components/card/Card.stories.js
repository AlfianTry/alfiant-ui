import { Button } from '../button/Button';
import Card from './Card';

export default {
  title: 'Card',
  argTypes: {
    elevation: {
      options: [1, 2, 3, 4, 5],
      control: { type: 'radio' },
    },
  },
};

const Template = (args) => <Card {...args}>
  <p>Hello World</p>
</Card>;

export const Basic = Template.bind({});
Basic.args = {
  elevation: 2,
};
