import Tooltip from './Tooltip';

export default {
  component: Tooltip,
  title: 'Tooltip',
};

const Template = (args) => <Tooltip {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
