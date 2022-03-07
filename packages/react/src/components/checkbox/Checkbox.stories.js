import Checkbox from "./Checkbox";

export default {
  title: 'Checkbox',
};

const Template = (args) => <Checkbox {...args} />

export const Basic = Template.bind({});
Basic.args = {
  disabled: false,
  label: 'Dengan mencentang ini, saya menyatakan menyetujui Ketentuan Layanan dan Kebijakan Majoo.'
};
